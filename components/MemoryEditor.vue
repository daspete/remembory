<template>
    <div class="editor">
        <form @submit.prevent="SaveMemory">
            <div class="pb-1">
                <label class="inline-block w-20" for="title">{{ $t('editor.name') }}</label>
                <input class="border p-2" name="title" type="text" v-model="memory.title" />
            </div>
            <div class="pb-1">
                <label class="inline-block w-20" for="columnCount">{{ $t('editor.columnCount') }}</label>
                <input class="border p-2" name="columnCount" type="number" v-model="memory.columnCount" />
            </div>
            
        </form>
    </div>
</template>

<script>
export default {
    props: {
        memory: {
            type: Object,
            default: () => { return {} }
        }
    }
}
</script>