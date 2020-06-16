<template>
    <div class="stats">
        <client-only>
            <div class="container mx-auto px-3 md:px-0 mt-3">
                <div class="shadow-lg" v-if="Games.length > 0">
                    <div :class="`flex px-2 border-b bg-${ gameIndex % 2 == 0 ? 'transparent' : 'gray-100' } hover:bg-gray-200`" v-for="(game, gameIndex) in Games" :key="`game-${ game.id }-${ gameIndex }`">
                        <div class="flex items-center w-2/6 py-2">
                            <nuxt-link :to="`/play/${ game.memoryId }`">
                                {{ GetMemoryName(game) }}
                            </nuxt-link>
                        </div>

                        <div class="flex flex-wrap justify-center items-center w-2/6 text-center py-2">
                            <div style="width: 100%">{{ game.correct }} / {{ game.rounds }}</div>
                            <div class="leading-none inline-block h-1 bg-teal-500" :style="`width: ${ (game.correct / game.rounds) * 50 }%`"></div>
                        </div>

                        <div class="flex items-center w-2/6 py-2 text-right">
                            <div class="w-full">{{ $moment(game.playedAt).calendar() }}</div>
                        </div>
                        <!-- <div class="w-1/6 py-2 text-right">
                            <div v-if="memory.createdAt">{{ $moment(memory.createdAt).calendar() }}</div>
                        </div>
                        <div class="w-1/6 py-2 text-right">
                            <nuxt-link class="mr-4" :to="`/play/${ memory.id }`">
                                <svg class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                            </nuxt-link>
                            <nuxt-link class="mr-4" :to="`/edit/${ memory.id }`">
                                <svg class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
                            </nuxt-link>
                            <button @click="DeleteMemory(memory.id)">
                                <svg class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
                            </button>
                        </div> -->
                    </div>     
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
export default {
    name: 'index_stats_index',

    computed: {
        Games(){
            return this.$store.getters['games/Games']
        },
    },

    methods: {
        GetMemoryName(game){
            let memories = this.$store.getters['memories/Memories']
            let gameMemory = memories.find((memory) => {
                return memory.id == game.memoryId
            })

            return gameMemory?.title
        }
    //     async DeleteMemory(memoryId){
    //         const title = this.$t('list.delete.confirm.title')
    //         const content = this.$t('list.delete.confirm.content')
    //         const labels = this.$t('list.delete.confirm.labels')

    //         if(await this.$root.$modal(title, content, { labels })){
    //             this.$store.commit('memories/removeMemory', memoryId)
    //         }
    //     }
    }
}
</script>