<template>
    <div class="editor">
        <client-only>
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
                <label class="inline-block w-20" for="columnCount">{{ $t('editor.columnCount') }}</label>
                <input class="border w-48 p-2" name="columnCount" type="number" v-model="memory.columnCount" />
            </div>
            
            <div v-if="memory.type == 'card'">
                <div class="sticky mt-4 px-2 py-2 bg-teal-100 text-center" style="top: 48px">
                    <button type="button" @click="AddCard" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white bg-white hover:bg-teal-500">{{ $t('editor.cards.add') }}</button>
                </div>

                <draggable v-model="memory.cards" class="flex flex-wrap -mx-2">
                    <div class="w-full md:w-1/3 px-2 py-2"
                        v-for="(card, cardIndex) in memory.cards"
                        :key="`card-${ card.id }`"
                    >
                        <div class="px-4 py-2 border rounded border-teal-500">
                            <div class="pb-1">
                                <label class="inline-block w-full" :for="`title-${ card.id }`">{{ $t('editor.cards.title') }}</label>
                                <input class="border w-full p-2" :name="`title-${ card.id }`" type="text" v-model="card.headline" />
                            </div>

                            <div class="pb-1">
                                <label class="inline-block w-full" :for="`title-${ card.id }`">{{ $t('editor.cards.content') }}</label>
                                <textarea class="border w-full p-2" :name="`title-${ card.id }`" type="text" v-model="card.content"></textarea>
                            </div>

                            <button type="button" @click="DeleteCard(cardIndex)">
                                <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" />
                            </button>
                        </div>
                    </div>
                </draggable>
            </div>
        
        </client-only>
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
        },
        DeleteCard(cardIndex){
            this.memory.cards.splice(cardIndex, 1)
        }
    }
}
</script>