export const state = () => {
    return {
        games: []
    }
}

export const mutations = {
    setGames(state, games){
        state.games = games
        localStorage.setItem('games', JSON.stringify(state.games))
    },

    addGame(state, game){
        state.games.push(game)
        localStorage.setItem('games', JSON.stringify(state.games))
    },
}

export const getters = {
    Games(state){
        return state.games
    }
}