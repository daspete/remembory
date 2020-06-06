<template>
    <div class="edit">
        <h1 class="text-xl pb-4">{{ $t('edit.headline') }}</h1>
        <MemoryEditor v-if="memory" :memory="memory" />
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
}
</script>