import axios from 'axios';
import sessionCart from '@/utils/sessionCart';

export default {
    data() {
        return {
            subcategories: [],
            ref: null
        }
    },

    mounted() {
        sessionCart.init(this.category);

        axios
            .get(`/api/services/${this.category}`)
            .then((response) => {
                this.subcategories = response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }
}