<template>
    <div class="modal" v-if="isActive">
        <div class="modal__backdrop"></div>
        <div class="modal__container">
            <div class="modal__window">
                <div class="modal__header bg-teal-500 text-white">
                    <span class="modal__header__title">{{ title }}</span>
                    <button class="modal__header__close" @click="Cancel">
                        <Icon icon="close" class="inline-block h-4 w-4 fill-current text-teal-500 hover:text-teal-700" /> 
                    </button>
                </div>
                <div class="modal__content">
                    {{ content }}

                    <div class="modal__buttons">
                        <button class="modal__button modal__button--yes rounded" @click="Agree">{{ options.labels.yes }}</button>
                        <button class="modal__button modal__button--cancel rounded" @click="Cancel">{{ options.labels.cancel }}</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            content: '',
            isActive: false,
            resolve: null,
            reject: null,
            options: {
                labels: {
                    yes: 'Yes',
                    cancel: 'Cancel'
                }
            }
        }
    },

    mounted(){
        this.$root.$modal = this.Open
    },

    methods: {
        Open(title, content, options){
            this.title = title
            this.content = content

            this.options = { ...this.options, ...options }

            this.isActive = true

            return new Promise((resolve, reject) => {
                this.resolve = resolve
                this.reject = reject
            })
        },

        Agree(){
            if(this.resolve) this.resolve(true)
            this.isActive = false
        },

        Cancel(){
            if(this.resolve) this.resolve(false)
            this.isActive = false
        }
    }
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &__backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(black, 0.5);
    }

    &__container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }

    &__window {
        width: 400px;
        max-width: 95%;
        height: auto;
        background-color: white;
        box-shadow: 0 10px 30px rgba(black, 0.16);
    }

    &__header {
        padding: 5px 13px;
        font-weight: 700;
        display: flex;
        align-items: center;

        &__title {
            flex-grow: 1;
        }

        &__close {
            border: 0;
            background-color: rgba(0,0,0,0);

            svg {
                width: 20px;
                height: 20px;

                path {
                    fill: white;
                }
            }
        }
    }

    &__content {
        padding: 5px 13px;
        text-align: center;
    }

    &__buttons {
        text-align: center;
        margin-top: 1rem;
    }

    &__button {
        padding: 3px 8px;
        color: white;

        &--yes {
            background-color: #2a5;
        }

        &--cancel {
            background-color: #a20;
        }
    }






}
</style>