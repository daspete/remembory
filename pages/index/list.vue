<template>
    <div class="list">
        <client-only>
            <div class="container mx-auto px-3 md:px-0">
                <div v-if="Memories.length > 0">
                    <div :class="`flex px-2 border-b bg-${ memoryIndex % 2 == 0 ? 'transparent' : 'gray-100' } hover:bg-gray-200`" v-for="(memory, memoryIndex) in Memories" :key="`memory-${ memory.id }-${ memoryIndex }`">
                        <div class="w-4/6 py-2">
                            <nuxt-link :to="`/play/${ memory.id }`">{{ memory.title }}</nuxt-link>
                        </div>
                        <div class="w-1/6 py-2 text-right">
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
    computed: {
        Memories(){
            return this.$store.getters['memories/Memories']
        }
    },

    methods: {
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