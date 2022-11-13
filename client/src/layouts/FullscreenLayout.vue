<script>
    export default {
        name: 'FullscreenLayout',
        props: {
            direction: {
                type: String,
                default: 'row'
            }
        },
        computed: {
            cssDirection() {
                return {
                    'flex-direction': this.direction
                }
            }
        }
    }
</script>

<template>
    <div :style="cssDirection">
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