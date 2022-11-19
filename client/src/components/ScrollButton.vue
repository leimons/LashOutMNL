<script>
    export default {
        name: 'ScrollButton',
        props: {
            threshold: {    // amount of px scrolled before button is visible
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                scrollTimer: 0,
                scrollY: 0,
                buttonStyle: {}
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll () {
                if (this.scrollTimer) return;

                this.scrollTimer = setTimeout(() => {
                    this.scrollY = window.scrollY;
                    clearTimeout(this.scrollTimer);
                    this.scrollTimer = 0;
                }, 200);
            }
        }
    }
</script>

<template>
    <button v-show="scrollY > threshold">
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        position: fixed;
        z-index: 5;
        opacity: 0.8;

        background-color: var(--primary100);
    }
</style>