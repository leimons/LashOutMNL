import { formatPrice } from "@/utils/numbers";
import sessionCart from '@/utils/sessionCart';

function selectItem (ref) {
    ref.innerHTML = "Selected";
    ref.classList.value = ref.classList.value.replace('light', 'dark');
}

function deselectItem(ref) {
    ref.innerHTML = "Select";
    ref.classList.value = ref.classList.value.replace('dark', 'light');
}

export default {
    data() {
        return {
            cart: {
                service: null,
                inclusions: []
            }
        }
    },
    mounted() {
        this.cart.service = JSON.parse(sessionStorage.cart).service;
    },
    methods: {
        formatPrice,
        addInclusion(inclusion) {
            this.cart.inclusions.push(inclusion);
        },
        removeInclusion(inclusion) {
            this.cart.inclusions = this.cart.inclusions.filter(v => v._id != inclusion._id);
        },
        addToCart(service, ref) {
            let isSelected = this.ref == ref;    

            if (isSelected) {
                deselectItem(this.ref);

                sessionCart.removeItem();
                this.cart.service = null;
                this.ref = null;
            } else {
                if (this.ref)
                    deselectItem(this.ref)

                selectItem(ref);

                sessionCart.setItem(service);
                this.cart.service = service;
                this.ref = ref;
            }
        }
    },
    computed: {
        totalPrice() {
            if (this.cart.service) {
                let servicePrice = parseFloat( this.cart.service.OnSale ? this.cart.service.SalePrice : this.cart.service.Price );
                let inclusionsPrice = this.cart.inclusions.reduce((partialSum, a) => partialSum + parseFloat(a.Price), 0) || 0;
                return servicePrice + inclusionsPrice;
            }
            return 0;
        },
        _inclusions: function () {
            return this.cart.inclusions;
        }
    },
    watch: {
        _inclusions: function () {
            // Update cart in session storage on value change
            sessionCart.setInclusions(this.cart.inclusions);
        },
    }
}