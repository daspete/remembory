<template>
    <div class="data__export">
        <button @click="Export">Alle Remembories exportieren</button>
    </div>
</template>

<script>
export default {
    methods: {
        async Export(){
            let content = JSON.stringify(this.$store.getters['memories/Memories'])
            let el = document.createElement('a')
            el.setAttribute('href', `data:text/plain;charset=utf-8,${ encodeURIComponent(content) }`)
            el.setAttribute('download', 'export.rem')
            el.style.display = 'none'
            document.body.appendChild(el)
            el.click()
            document.body.removeChild(el)
        }
    }
}
</script>

<style lang="scss">
.data__export  {
    text-align: center;
    padding: 20px;
}
</style>