<script>
    export default {
        name: 'FullscreenLayout',
        props: {
            direction: {
                type: String,
                default: 'row'
            },
            centerVertical: {
                type: Boolean,
                default: false
            },
            centerHorizontal: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            cssLayout() {
                return {
                    'flex-direction': this.direction,
                    'align-items': this.centerVertical ? 'center' : 'stretch',
                    'justify-content': this.centerHorizontal ? 'center' : 'flex-start'
                }
            }
        }
    }
</script>

<template>
    <div :style="cssLayout">
        <slot></slot>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        align-items: center; /* vertical */
        justify-content: center; /* horizontal */

        width: 100%;
        min-height: 100vh;
    }
</style>