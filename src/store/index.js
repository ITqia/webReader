import Vue from 'vue'
import Vuex from 'vuex'
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
Vue.use(Vuex)
// const state = {
//   showFooter: true,
//   changableNum: 0
// }
// const getters = {
//   isShow (state) {
//     return state.showFooter
//   },
//   getChangedNum () {
//     return state.changableNum
//   }
// }
// const mutations = {
//   show (state) {
//     state.showFooter = true
//   },
//   hide (state) {
//     state.showFooter = false
//   },
//   newNum (state, num) {
//     state.changableNum += num
//   }
// }
// const actions = {
//   hideFooter (context) {
//     context.commit('hide')
//   },
//   showFooter (context) {
//     context.commit('show')
//   },
//   getNewNum (context, num) {
//     context.commit('newNum', num)
//   }
// }
const store = new Vuex.Store({
  modules: {
    footerStatus,
    collection
  }
})
export default store
