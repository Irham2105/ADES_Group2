new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    animationDuration: 1000,
    
    // Add pagination
    pagination: {
        el: '.glide__bullets',
    },
}).mount();