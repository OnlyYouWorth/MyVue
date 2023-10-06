
import Vuex from "vuex";
import Vue from "vue";
//
const actions = {
    increment:function (){
        console.log("increment")
    }
}

const mutations = {}

const state = {
    sum:0 //当前的和
}

Vue.use(Vuex)

const store = new Vuex.Store({
    actions:actions,
    mutations,
    state
})

export default store
