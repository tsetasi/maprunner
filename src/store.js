import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment';
import fieldData from './fieldData.json';

Vue.use(Vuex)

const state = {
  configured: false,
  expansionOptions: fieldData.expansions,
  currencyOptions: fieldData.currencies,
  regions: [
    {
        "name": "Gyr Abania",
        "zones": ["Fringes", "Lochs", "Peaks"]
    },
    {
        "name": "Othard",
        "zones": ["Azim Steppe", "Ruby Sea", "Yanxia"]
    }
  ],
  currency: {
    gil: {initial: 0, final: 0},
    genesis: {initial: 0, final: 0},
    mendacity: {initial: 0, final: 0}
  },
  portalTypes: [
    {"name": "Canals", "type": "floor", "failText": "Should have gone left!", "max": 7},
    {"name": "Altars", "type": "invocation", "failText": "FUCKING ATOMOS", "max": 5},
    {"name": "Hidden", "type": "floor", "failText": "Should have gone left!", "max": 7}
  ],
  mapCounts: {"Fringes": 0, "Lochs": 0, "Peaks": 0, "Azim Steppe": 0, "Ruby Sea": 0, "Yanxia": 0},
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
    })

    summary += ` ${earningsSummary}.`;
    return summary;
  }
};

const mutations = {
  setConfig (state, configData) {
    // Set expansion region data
    state.regions = configData.expansion.regions;
    
    // Set currency types and initial counts
    let currency = {};
    Object.keys(configData.currencies).forEach((item) => {
      currency[item] = {};
      currency[item].initial = configData.currencies[item];
      currency[item].final = 0;
    })
    console.log(currency)
    state.currency = currency;

    state.regions.forEach((region) => {
      region.zones.forEach((zone) => { state.mapCounts[zone] = 0; })
    })

    // Start the clock
    state.startTime = moment();

    // Flag app as configured
    state.configured = true;
  },
  setCurrency(state, data) { state.currency = data; },
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
  setEndTime ({commit}, time) { commit('setEndTime', time); },
  incrementPortals({commit}) { commit('incrementPortals'); },
  incrementMapsRun({commit}) { commit('incrementMapsRun'); }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
