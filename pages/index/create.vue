<template>
    <div class="create">
        <h1 class="text-xl pb-4">{{ $t('create.headline') }}</h1>
        <MemoryEditor v-if="memory" :memory="memory" />
    </div>
</template>

<script>
export default {
    asyncData(){
        return {
            memory: {
                id: new Date().getTime(),
                title: 'Exciting Remembory',
                columnCount: 6,
                rows: [],
            }
        }
    }
}
</script>