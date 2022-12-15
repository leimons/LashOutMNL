<script>
    export default {
        name: 'PopupCard',
        emits: ['close', 'confirm', 'cancel'],
        props: {
            confirmText: {
                // Text to display for the confirm button. If value is null, no confirm button will be displayed.
                type: String,
                default: 'Ok'
            },
            cancelText: {
                // Text to display for the cancel button. If value is null, no cancel button will be displayed.
                type: String,
                default: 'Cancel'
            },
            
            id: { type: String },
            class: { type: String },
            style: { type: String }
        },
        computed: {
            confirm() {
                return this.confirmText != null;
            },
            cancel() {
                return this.cancelText != null;
            }
        }
    }
</script>

<template>
    <div class="popup-modal">
        <div class="modal-container">
            <button id="close-btn" @click="this.$emit('close');">&times;</button>

            <div :class="`modal-content ${this.class}`" :id="id" :style="style">
                <slot>  &nbsp;  </slot>
            
                <div class="buttons-container" v-if="confirm || cancel">
                    <button class="small dark" v-if="confirm" @click="this.$emit('confirm')">{{ confirmText }}</button>
                    <button class="small grey" v-if="cancel" @click="this.$emit('cancel')">{{ cancelText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .popup-modal {
        background-color: white;
        padding: 20px;
        box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
        height: auto;
       
        position: fixed;
        top: 50%;
        left: 50%;
        height: 80vh;
        width: 60vw;
        margin-top: -40vh;
        margin-left: -30vw;

        z-index: 10;
        overflow: scroll;
    }

    .modal-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 120px;
        overflow: scroll;
        height: 100%;
    }

        .modal-container #close-btn {
            position: absolute;
            top: 0;
            right: -12px;

            background: none;
            border: none;
            line-height: 10%;
            width: min-content;
            font-size: xx-large;
            text-align: end;
        }

        .modal-container .buttons-container {
            display: flex;
            flex-direction: row-reverse;
            gap: 10px;
            margin-top: auto;
        }

        .modal-container .buttons-container .grey {
            border-color: grey;
        }

    .modal-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
        overflow: scroll;
    }
</style>