<template>
    <div class="editor">
        <form @submit.prevent="SaveMemory">
            <div class="pb-1">
                <label class="inline-block w-20" for="title">{{ $t('editor.name') }}</label>
                <input class="border w-48 p-2" name="title" type="text" v-model="memory.title" />
            </div>

            <div class="pb-1">
                <label class="inline-block w-20" for="type">{{ $t('editor.type') }}</label>
                <select class="border w-48 p-2" name="type" v-model="memory.type">
                    <option value="table">Tabelle</option>
                    <option value="card">Karten</option>
                </select>
            </div>

            <div v-if="memory.type == 'table'">
                <div class="pb-1">
                    <label class="inline-block w-20" for="columnCount">{{ $t('editor.columnCount') }}</label>
                    <input class="border w-48 p-2" name="columnCount" type="number" v-model="memory.columnCount" />
                </div>
            </div>
            
            <div v-if="memory.type == 'card'">
                <div class="pb-1">
                    <div class="pb-1"
                        v-for="(card, cardIndex) in memory.cards"
                        :key="`card-${ card.id }`"
                    >
                        {{ card }}
                    </div>


                    <button type="button" @click="AddCard" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white bg-white hover:bg-teal-500">{{ $t('editor.cards.add') }}</button>
                </div>
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
    },

    methods: {
        AddCard(){
            this.memory.cards.push({
                id: new Date().getTime(),
                headline: '',
                content: ''
            })
        }
    }
}
</script>