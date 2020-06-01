<template>
    <div class="data">
        <div class="topmenu">
            <nuxt-link to="/">Zurück zum Start</nuxt-link>
            <nuxt-link to="/data/export">Exportieren</nuxt-link>
            <nuxt-link to="/data/import">Importieren</nuxt-link>
        </div>

        <div class="data__content">
            <nuxt-child />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>