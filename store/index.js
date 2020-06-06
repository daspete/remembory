export const actions = {
    nuxtClientInit({ commit }, context){
        try {
            let items = localStorage.getItem('memories')
            if(!items || items == 'null') items = '[]'
            commit('memories/setMemories', JSON.parse(items))
        }catch(err){ console.log(err) }
    }
}