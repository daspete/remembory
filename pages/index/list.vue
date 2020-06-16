<template>
    <div class="list">
        <client-only>
            <div class="container mx-auto px-3 md:px-0 mt-3">
                <div class="shadow-lg" v-if="Memories.length > 0">
                    <div :class="`flex px-2 border-b bg-${ memoryIndex % 2 == 0 ? 'transparent' : 'gray-100' } hover:bg-gray-200`" v-for="(memory, memoryIndex) in Memories" :key="`memory-${ memory.id }-${ memoryIndex }`">
                        <div class="w-3/6 py-2">
                            <nuxt-link :to="`/play/${ memory.id }`">{{ memory.title }}</nuxt-link>
                        </div>
                        <div class="w-2/6 py-2 text-right">
                            <span v-if="memory.createdAt" class="text-xs">{{ $moment(memory.createdAt).calendar() }}</span>
                            <span class="inline-block w-12 ml-2 text-sm">{{ GetMemoryStats(memory) }}</span>
                        </div>
                        <div class="w-1/6 py-2 text-right">
                            <nuxt-link class="mr-4" :to="`/play/${ memory.id }`">
                                <Icon icon="play" class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" />
                            </nuxt-link>
                            <nuxt-link class="mr-4" :to="`/edit/${ memory.id }`">
                                <Icon icon="compose" class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" />
                            </nuxt-link>
                            <button @click="DeleteMemory(memory.id)"> 
                                <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" />
                            </button>
                        </div>
                    </div>     
                </div>

                <div class="text-center" v-else>
                    <div class="text-xl">{{ $t('list.nothing.headline') }}</div>
                    <nuxt-link to="/create" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                        {{ $t('list.nothing.create') }}
                    </nuxt-link>
                </div>
            </div>

            
        </client-only>
    </div>
</template>

<script>
export default {
    name: 'index_list',

    computed: {
        Memories(){
            return this.$store.getters['memories/Memories']
        }
    },

    methods: {
        GetMemoryStats(memory){
            let games = this.$store.getters['games/Games']

            let memoryGames = games.filter((game) => {
                return game.memoryId == memory.id
            })

            let rounds = 0
            let correct = 0

            memoryGames.map((game) => {
                rounds += game.rounds
                correct += game.correct
            })

            return `${ correct } / ${ rounds }`
        },
        async DeleteMemory(memoryId){
            const title = this.$t('list.delete.confirm.title')
            const content = this.$t('list.delete.confirm.content')
            const labels = this.$t('list.delete.confirm.labels')

            if(await this.$root.$modal(title, content, { labels })){
                this.$store.commit('memories/removeMemory', memoryId)
            }
        }
    }
}
</script>