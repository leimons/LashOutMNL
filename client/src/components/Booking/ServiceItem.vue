<script>
    import { formatPrice } from '@/utils/numbers';

    export default {
        name: 'ServiceItem',
        props: {
            showDuration: {
                type: Boolean,
                default: false
            },
            data: {
                type: Object,
                default: () => { return {}; }
            }
        },
        methods: { formatPrice }
    }
</script>

<template>
    <div class="service-item">
        <img src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder. TODO: Replace with service image -->
        
        <div>
            <b>{{ data.Service }}</b><br />
            <i v-if="showDuration">{{ data.Duration }}</i>
            <i v-else>{{ data.Category }} ({{ data.Subcategory }})</i>
        </div>

        <span>{{ formatPrice(data.Price) }}</span>
    </div>
</template>

<style>
    .service-item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px 0;

        border-bottom: 1pt solid #ddd;
    }

        .service-item > img {
            height: calc(220px * 0.5);
            width: calc(350px * 0.5);
            overflow: hidden;
        }

        .service-item > div {
            flex: 1;
            padding-right: 20px;
        }

            .service-item > div i {
                opacity: 0.5;
            }
</style>