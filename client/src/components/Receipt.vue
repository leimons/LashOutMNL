<script>
    export default {
        name: 'VReceipt'
    }
</script>

<template>
    <div class="receipt">
        <div>
            <slot name="header">1</slot>
        </div>

        <div class="receipt-list">
            <slot name="body">2</slot>
        </div>

        <div>
            <slot name="footer">3</slot>
        </div>
    </div>
</template>

<style>
    .receipt {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 10px;

        background-color: white;
    }

    .receipt:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        height: 10px;

        background:
            linear-gradient(
                45deg, transparent 33.333%,
                white 33.333%, white 66.667%,
                transparent 66.667%
            ),
            linear-gradient(
                -45deg, transparent 33.333%,
                white 33.333%, white 66.667%,
                transparent 66.667%
            );
        background-size: 8px 20px;
        background-position: 0 -10px;
    }
</style>