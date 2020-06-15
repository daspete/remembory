<template>
    <div class="edit">
        <div class="bg-teal-200 sticky top-0">
            <div class="container mx-auto px-3 md:px-0">
                <div class="flex items-center w-full py-2">
                    <h1 class="flex-1 text-xl">{{ $t('edit.headline') }}</h1>
                    <div class="text-right">
                        <button @click="$router.back()" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500">{{ $t('edit.cancel') }}</button>
                        <button @click="SaveMemory" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white bg-white hover:bg-teal-500">{{ $t('edit.save') }}</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container mx-auto pt-4 px-3 md:px-0">
            <MemoryEditor v-if="memory" :memory="memory" @save-memory="SaveMemory" />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            memory: false
        }
    },

    mounted(){
        let currentMemory = this.$store.getters['memories/Memories'].find((memory) => {
            return memory.id == this.$route.params.id
        })

        this.memory = JSON.parse(JSON.stringify(currentMemory))
    },

    methods: {
        SaveMemory(){
            console.log('SAVE')
            this.$store.commit('memories/updateMemory', this.memory)
            this.$router.push('/list')
        }
    }
}
</script>