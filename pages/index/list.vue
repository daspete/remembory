<template>
    <div>
        <table class="table-fixed w-full" v-if="Memories.length > 0">
            <thead>
                <tr>
                    <th class="w-5/6 px-4 py-2">{{ $t('list.table.name') }}</th>
                    <th class="w-1/6 px-4 py-2">{{ $t('list.table.actions') }}</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(memory, memoryIndex) in Memories">
                    <tr :key="`memory-${ memory.id }-${ memoryIndex }`">
                        <td class="border px-4 py-2">
                            <nuxt-link :to="`/play/${ memory.id }`">{{ memory.title }}</nuxt-link>
                        </td>
                        <td class="border px-4 py-2">
                            <nuxt-link :to="`/play/${ memory.id }`">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                            </nuxt-link>
                            <nuxt-link :to="`/edit/${ memory.id }`">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
                            </nuxt-link>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
                            </button>
                        </td>
                    </tr>
                    
                </template>
            </tbody>
        </table>
        <div class="text-center">
            <div class="text-xl">{{ $t('list.nothing.headline') }}</div>
            <nuxt-link to="/create" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                {{ $t('list.nothing.create') }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        Memories(){
            return this.$store.getters['memories/Memories']
        }
    }
}
</script>