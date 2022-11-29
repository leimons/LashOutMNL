const sessionCart = {

    init: function() {
        sessionStorage.setItem('cart', JSON.stringify([]));
    },

    getItems: function() {
        return JSON.parse(sessionStorage.cart);
    },

    addItem: function(item) {
        let cart = this.getItems();
        let newCart = [...cart, item];

        sessionStorage.setItem('cart', JSON.stringify(newCart));
    },

    removeItem: function(item) {
        let cart = this.getItems();
        let newCart = cart.filter(v => v._id != item._id);

        sessionStorage.setItem('cart', JSON.stringify(newCart));
    },

    clear: () => {
        sessionStorage.setItem('cart', JSON.stringify([]));
    }
}

export default sessionCart;