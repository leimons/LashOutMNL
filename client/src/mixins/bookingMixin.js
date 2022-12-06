import sessionCart from '@/utils/sessionCart';
import axios from 'axios';

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
            subcategories: [],
            cart: {
                service: null,
                ref: null
            }
        }
    },

    created() {
        sessionCart.init(this.category);

        axios
            .get(`/api/services/${this.category}`)
            .then((response) => {
                this.subcategories = response.data
            })
            .catch((e) => {
                console.log(e)
            })
    },

    methods: {
        addToCart(service, ref) {
            let isSelected = this.cart.ref == ref;    

            if (isSelected) {
                deselectItem(this.cart.ref);

                sessionCart.removeItem();
                this.cart = {service: null, ref: null};
            } else {
                if (this.cart.ref)
                    deselectItem(this.cart.ref)

                selectItem(ref);

                sessionCart.setItem(service);
                this.cart = {service, ref};
            }
        }
    }
}