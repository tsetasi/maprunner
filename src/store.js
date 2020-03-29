import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment';
import fieldData from './fieldData.json';

Vue.use(Vuex);

const state = {
  configured: false,
  expansionOptions: fieldData.expansions,
  currencyOptions: fieldData.currencies,
  regions: [],
  finderLink: "",
  currency: {},
  portalTypes: [],
  portalRuns: [],
  itemList: fieldData.items,
  mapsRun: 0,
  portalsOpened: 0,
  startTime: null,
  endTime: null
};

const getters = {
  getEarnedCurrencies(state) {
    let currencies = state.currency;
    let earned = {};

    Object.keys(currencies).forEach((key) => {
      earned[key] = currencies[key].final - currencies[key].initial;
    });

    return earned;
  },
  getPortalStats(state) {
    let portalStats = {};
    
    portalStats.portals = state.portalsOpened;
    portalStats.mapsRun = state.mapsRun;

    portalStats.portalRate = portalStats.portals > 0 ? ((portalStats.portals / portalStats.mapsRun) * 100).toFixed(2) : 0;

    return portalStats;
  },
  getSummaryReport(state, getters) {
    let endTime = state.endTime ? state.endTime : moment();
    let timeDiff = endTime.diff(state.startTime, 'minutes');
    let portalRate = state.portalsOpened > 0 ? ((state.portalsOpened / state.mapsRun) * 100).toFixed(2) : 0;
    
    // Time and portal rate
    let summary = `Time elapsed: ${timeDiff} minutes. Ran ${state.mapsRun} map${state.mapsRun === 1 ? '' : 's'}, opening ${state.portalsOpened} portal${state.portalsOpened === 1 ? '' : 's'}, for a portal rate of ${portalRate}%.`;

    // Earnings
    let earnings = getters.getEarnedCurrencies;
    let earningsSummary = '';
    Object.keys(earnings).forEach((currency) => {
      earningsSummary += ` ${earnings[currency]} ${currency}`
    });

    summary += ` ${earningsSummary}. `;

    let portalRuns = 'Portal results: ';
    state.portalRuns.forEach((run, index, runs) => {
      portalRuns += `${run.portalType} ${run.cleared ? 'clear' : run.floorReached}${index === runs.length - 1 ? '.' : ', '}`;
    });

    summary += portalRuns;

    return summary;
  },
  getLootReport(state) {
    let summary = 'Loot: ';
    state.itemList.forEach((item, index, items) => {
      summary += `${item.itemCount} ${item.itemName}${index === items.length - 1 ? '.' : ', '}`;
    });

    return summary;
  }
};

const mutations = {
  setConfig (state, configData) {
    // Set expansion region data and map finder link
    state.regions = configData.expansion.regions;
    state.finderLink = configData.expansion.finderLink;
    
    // Set currency types and initial counts
    let currency = {};
    Object.keys(configData.currencies).forEach((item) => {
      currency[item] = {};
      currency[item].initial = configData.currencies[item];
      currency[item].final = 0;
    });
    state.currency = currency;

    state.portalTypes = configData.expansion.portalTypes;

    // Start the clock
    state.startTime = moment();

    // Flag app as configured
    state.configured = true;
  },
  processPortalRun (state, runDetails) {
    state.portalRuns.push(runDetails);
    runDetails.itemsGained.forEach((gainedItem) => {
      state.itemList.forEach((listItem, index) => {
        if (gainedItem.itemName === listItem.itemName) {
          state.itemList[index].itemCount += gainedItem.itemCount;
        }
      });
    });
  },
  addItem(state, item) { state.itemList.push(item); },
  setCurrency(state, data) { state.currency = data; },
  setEndTime(state, time) { state.endTime = time; },
  incrementMapsRun(state) { state.mapsRun++; },
  incrementPortals(state) { state.portalsOpened++; }
};

const actions = {
  setConfig ({commit}, configData) {
    commit('setConfig', configData);
  },
  updateCurrency ({commit}, currencyData) {
    commit('setCurrency', currencyData);
  },
  updateItemList( {commit}, item) { commit('addItem', item); },
  setEndTime ({commit}, time) { commit('setEndTime', time); },
  incrementPortals({commit}) { commit('incrementPortals'); },
  incrementMapsRun({commit}) { commit('incrementMapsRun'); },
  savePortalRun({commit}, runDetails) { commit('processPortalRun', runDetails); }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
