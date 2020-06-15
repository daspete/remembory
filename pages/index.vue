<template>
    <div class="app">
        <TopMenu />

        <nuxt-child />
<!--         
        <div class="container mx-auto app__content">
            
        </div> -->

        <ModalWindow />
    </div>
</template>

<script>
export default {
    name: 'index'
}
</script>