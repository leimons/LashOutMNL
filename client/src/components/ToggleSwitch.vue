<script>
    export default {
        name: 'ToggleSwitch',
        emits: ['toggle'],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            on: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                checked: false
            }
        },
        created() {
            this.checked = this.on;
        }
    }
</script>

<template>
    <label class="switch">
        <input type="checkbox"
            :disabled="disabled"
            :value="on"
            :checked="on"
            @input="this.$emit('toggle')"
         />
        <span class="slider round"></span>
    </label>
</template>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 53px;
        height: 27px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20.8px;
        width: 20.8px;
        left: 3.2px;
        bottom: 3.2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: var(--primary500);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--primary500);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 27px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>