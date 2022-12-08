const defaultCart = {
    service: null,
    category: null,
    inclusions: []
}

const sessionCart = {

    init: function(category) {
        sessionStorage.setItem('cart', JSON.stringify({...defaultCart, category}));
    },

    getItem: function() {
        return JSON.parse(sessionStorage.cart).service;
    },

    setItem: function(item) {
        let newCart = {...defaultCart, service: item}
        sessionStorage.setItem('cart', JSON.stringify(newCart));
    },

    removeItem: function() {
        let currentCart = JSON.parse(sessionStorage.cart);
        sessionStorage.setItem('cart', JSON.stringify({...currentCart, service: null}));
    },

    setInclusions: function(inclusions) {
        let currentCart = JSON.parse(sessionStorage.cart);
        sessionStorage.setItem('cart', JSON.stringify({...currentCart, inclusions}));
    },

    clear: () => {
        sessionStorage.setItem('cart', JSON.stringify(defaultCart));
    }
}

export default sessionCart;