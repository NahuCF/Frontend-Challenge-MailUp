import userMutations from './mutations'
import userGetters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            userData: null
        }
    },
    mutations: userMutations,
    getters: userGetters
}