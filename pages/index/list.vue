<template>
    <div>
        <table class="table-fixed w-full">
            <thead>
                <tr>
                    <th class="w-5/6 px-4 py-2">Name</th>
                    <th class="w-1/6 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(memory, memoryIndex) in $store.getters['memories/Memories']">
                    <tr :key="`memory-${ memory.id }-${ memoryIndex }`">
                        <td class="border px-4 py-2">
                            <nuxt-link :to="`/play/${ memory.id }`">{{ memory.title }}</nuxt-link>
                        </td>
                        <td class="border px-4 py-2">
                            <nuxt-link :to="`/play/${ memory.id }`">play</nuxt-link>
                            <nuxt-link :to="`/edit/${ memory.id }`">edit</nuxt-link>
                            <button>delete</button>
                        </td>
                    </tr>
                    
                </template>
            </tbody>
        </table>
    </div>
</template>