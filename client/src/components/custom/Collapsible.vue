<script>
    export default {
        name: 'CollapsibleItem',
        props: {
            title: String
        },
        data() {
            return {
                open: false
            }
        },
        computed: {
            styleContent() {
                return {
                    "maxHeight": this.open ? "none" : "0"
                }
            }
        }
    }
</script>

<template>
    <div>
        <button class="collapsible-header" @click="this.open = !this.open">
            {{ title }}
            <span>{{ this.open ? "–" : "+" }}</span>
        </button>

        <div class="collapsible-content" :style="styleContent">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .collapsible-header {
        position: relative;
        width: 100%;
        
        font: 500 20px 'Lora', serif;
        text-align: left;
        text-transform: none;

        background-color: var(--primary50);
        border-color: var(--secondary900);
        color: var(--secondary900);
    }

        .collapsible-header > span {
            position: absolute;
            right: 10px;

            width: 30px;
            text-align: center;
            font-weight: bold;
        }

    .collapsible-content {
        max-height: 0;
        width: inherit;
        overflow: hidden;
        transition: max-height 0.2s ease-out;

        padding-top: 20px;
    }
</style>