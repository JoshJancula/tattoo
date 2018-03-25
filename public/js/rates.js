window.onload = function() {

    var ratesImages = [

        {
            link: "images/rates/pierce1.jpeg"
        },
        {
            link: "images/rates/pierce2.jpeg"
        },

        {
            link: "images/rates/pierce3.jpeg"
        },
        {
            link: "images/rates/pierce4.jpeg"
        },


    ];


    // function to initialize our carousel
    function carouselInit() {
        $('.carousel').carousel({
            shift: 50,
        })
    }

    const carousel = $("<div class='carousel'>"); //create brand new carousel div element
    $("#piercePhotos").append(carousel);
    ratesImages.forEach(function(result) {
        let pic = result.link;
        let newImage = $("<a class='carousel-item' href='#'>").append(
            "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

        )
        carousel.append(newImage);
    });


    carouselInit()
}




// this is copyrighted by josh jancula 2018 all rights reserved