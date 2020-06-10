<template>
    <div class="app">
        <TopMenu />

        <div class="container mx-auto app__content p-3">
            <nuxt-child />
        </div>

        <ModalWindow />
    </div>
</template>

<script>
export default {
    name: 'index'
}
</script>