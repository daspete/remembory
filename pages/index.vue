<template>
    <div class="app">
        <TopMenu />
        <nuxt-child />
        <ModalWindow />
    </div>
</template>

<script>
export default {
    name: 'index',

    mounted(){
        this.$moment.locale(this.$i18n.locale == 'en' ? 'en-gb' : this.$i18n.locale)
    }
}
</script>