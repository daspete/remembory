<template>
    <div class="data__import">
        <label for="importfile">Wählen Sie einen Remembory Export aus</label><br>
        <input type="file" @change="OnFileSelect" />

        <br><br>
        <button @click="Import">Importieren {{ memories.length > 0 ? (memories.length + ' Remembories') : '' }}</button>
        <br><br>
        <div v-if="imported"><b>Datensätze wurden importiert</b></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imported: false,
            memories: []
        }
    },

    methods: {
        OnFileSelect(e){
            let file = e.target.files[0]
            
            let fileReader = new FileReader()
            fileReader.onload = (content) => {
                this.memories = JSON.parse(fileReader.result)
            }
            fileReader.readAsText(file)
        },

        async Import(){
            let memories = this.$store.getters['memories/Memories']
            memories = JSON.parse(JSON.stringify(memories))
            memories = [
                ...memories,
                ...this.memories.map((memory) => {
                    memory.id += new Date().getTime()
                    return memory
                })
            ]

            this.$store.commit('memories/setMemories', memories)

            this.memories = []
            this.imported = true
        }
    }
}
</script>
<style lang="scss">
.data__import {
    text-align: center;
    padding: 20px;
}
</style>