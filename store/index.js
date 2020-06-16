export const actions = {
    nuxtClientInit({ commit }, context){
        try {
            let items = localStorage.getItem('memories')
            if(!items || items == 'null') items = '[]'
            items = JSON.parse(items)
            items = items.map((item) => {
                if(typeof item.type === 'undefined') item.type = 'table'
                return item
            })

            commit('memories/setMemories', items)
        }catch(err){ console.log(err) }

        try {
            let games = localStorage.getItem('games')
            if(!games || games == 'null') games = '[]'
            games = JSON.parse(games)

            commit('games/setGames', games)
        }catch(err){ console.log(err) }
    }
}