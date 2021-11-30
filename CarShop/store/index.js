import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/app'

Vue.use(Vuex)
const fontSizeDefault = 25

export default new Vuex.Store({
	state: {
		fontSize: fontSizeDefault,
	},
	getters: {
		getGlobalFontSize: (state) => state.fontSize,
		getPageFontClass: (state) => {
			return 0.01 * state.fontSize + 0.3 + 'px'
		}
	},
	mutations: {
		setGlobalFontSize (state, value) {
			state.fontSize = value
		}
	},
	actions: {
		// 
	},
	modules: {
		user,
		app
	}
})
