new Glide('.glide', {
            type: 'carousel',        
            perView: 3,              
            perMove: 1,              
            autoplay: 3000,
            hoverpause: true,
            animationDuration: 800,
            gap: 16,                 

            breakpoints: {
                1024: { perView: 2 },   // tablets → 2 itens
                640:  { perView: 3 }    // celular → 1 item
            }
        }).mount();
