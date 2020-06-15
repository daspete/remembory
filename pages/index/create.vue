<template>
    <div class="create">
        <div class="bg-teal-200 sticky top-0">
            <div class="container mx-auto px-3 md:px-0">
                <div class="flex items-center w-full py-2">
                    <h1 class="flex-1 text-xl">{{ $t('create.headline') }}</h1>
                    <div class="text-right">
                        <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500">{{ $t('create.cancel') }}</button>
                        <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white bg-white hover:bg-teal-500">{{ $t('create.save') }}</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container mx-auto pt-4 px-3 md:px-0">
            <MemoryEditor v-if="memory" :memory="memory" />
        </div>
    </div>
</template>

<script>
export default {
    asyncData(){
        return {
            memory: {
                id: new Date().getTime(),
                title: 'Exciting Remembory',
                type: 'table',
                columnCount: 6,
                rows: [],
                cards: []
            }
        }
    }
}
</script>