<template>
    <div class="bg-teal-500">
        <nav class="mx-auto container flex items-center justify-between flex-wrap py-6 px-3 md:px-0">
            <nuxt-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
                <img src="/icon.png" class="fill-current h-8 w-8 mr-2" />
                <span class="font-semibold text-xl tracking-tight">Remembory</span>
            </nuxt-link>

            <div class="block md:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <Icon icon="menu" class="fill-current h-3 w-3" />
                </button>
            </div>

            <div class="w-full block flex-grow text-center md:text-left md:flex md:items-center md:w-auto">
                <div class="text-sm md:flex-grow">
                    <nuxt-link to="/list" class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                        Remembories
                    </nuxt-link>

                    <nuxt-link to="/stats" class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                        {{ $t('topmenu.stats')}}
                    </nuxt-link>
                    
                </div>
                <div>
                    <nuxt-link to="/create" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">
                        {{ $t('topmenu.create') }}
                    </nuxt-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>