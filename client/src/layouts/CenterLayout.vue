<script>
    export default {
        name: 'CenterLayout',
        props: {
            direction: {
                type: String,
                default: 'column'
            },
            center: {
                type: String,
                default: 'row'
            },
            vertical: {
                type: Boolean,
                default: false
            },
            horizontal: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            cssLayout() {
                return {
                    'flex-direction': this.direction,
                    'align-items': (this.center || this.vertical) ? 'center' : 'stretch',
                    'justify-content': (this.center || this.horizontal) ? 'center' : 'flex-start'
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
        width: 100%;
    }
</style>