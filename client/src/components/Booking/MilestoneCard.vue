<script>
    export default {
        name: 'MilestoneCard',
        props: {
            step: {
                type: Number,
                default: 0
            },
            currentStep: {
                type: Number,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            },
            error: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            showAlert() {
                alert('test')
            },
            disableComponents(bool) {
                const tags = ["input", "button", "textarea", "select"];
                tags.forEach(tagName => {
                    var nodes = this.$refs['content'].getElementsByTagName(tagName);
                    for (let i = 0; i < nodes.length; i++) {
                        nodes[i].disabled = bool;
                    }
                });
            }
        },
        watch: {
            disabled: function (v) {
                this.disableComponents(v);
            },
            currentStep: function () {
                this.disableComponents(this.disabled || !this.focused);
            }
        },
        mounted() {
            this.disableComponents(this.disabled || !this.focused);
        },
        computed: {
            classes() {
                return {
                    'card': true,
                    'disabled': this.disabled || !this.focused,
                    'error': this.error
                }
            },
            focused() {
                return this.currentStep == this.step;
            }
        }
    }
</script>

<template>
    <div :class="classes" @click.stop="this.disabled">
        <div class="card-heading">
            <span>{{ step }}</span>
            <h2><slot name="heading">Heading</slot></h2>
        </div>
        
        <div class="card-content" ref="content" v-show="focused">
            <slot name="content">Content here.</slot>
        </div>
    </div>
</template>

<style>
    .card {
        background-color: white;
        padding: 20px;
        box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
        height: auto;
    }

        .card.disabled  {
            opacity: 0.5;
            background-color: #fefefe;
        }

        .card.error {
            border-top: 3pt solid var(--primary900) !important;
        }

    .card-heading {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--secondary900);
    }

    .card-heading > span {
        display: inline-block;
        width: 25px;
        height: 25px;
        padding-top: 3px;

        vertical-align: middle;
        border-radius: 100%;
        background-color: var(--secondary900);

        color: var(--secondary100);
        font: bold 15px 'Lora';
        text-align: center;
    }

    .card-heading h2 {
        font-size: 16pt;
    }

    .card-content {
        margin-top: 8px;
        margin-left: 25px;
        font-family: 'Nunito';
        padding: 10px;
    }
</style>