<script>
    export default {
        name: 'ScrollButton',
        props: {
            threshold: {
                type: Number,
                default: 20
            },
            position: {
                /*
                    Position of sticky button on screen.
                    Options: 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
                */
                type: String,
                default: 'topLeft'
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

            if (this.position.includes('top'))
                this.buttonStyle['top'] = '20px';
            else if (this.position.includes('bottom'))
                this.buttonStyle['bottom'] = '20px';
            
            if (this.position.includes('Left'))
                this.buttonStyle['left'] = '20px';
            else  if (this.position.includes('Right'))
                this.buttonStyle['right'] = '20px';

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
        left: 20px;
        top: 20px;
        z-index: 5;
        opacity: 0.8;

        background-color: var(--primary100);
    }
</style>