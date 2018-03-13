var mikeImages = [

    {
        link: "images/mike/mike1.jpg"
    },
    {
        link: "images/mike/mike2.jpg"
    },
  
    {
        link: "images/mike/mike4.jpg"
    },
    {
        link: "images/mike/mike5.jpg"
    },
    {
        link: "images/mike/mike6.jpg"
    },
    {
        link: "images/mike/mike7.jpg"
    },
    {
        link: "images/mike/mike8.jpg"
    },
    {
        link: "images/mike/mike9.jpg"
    },
    {
        link: "images/mike/mike10.jpg"
    },


];

var ikeImages = [

    {
        link: "images/ike/ike1.jpg"
    },
    {
        link: "images/ike/ike2.jpg"
    },
    {
        link: "images/ike/ike3.jpg"
    },
    {
        link: "images/ike/ike4.jpg"
    },
    {
        link: "images/ike/ike5.jpg"
    },
    {
        link: "images/ike/ike6.jpg"
    },
    {
        link: "images/ike/ike7.jpg"
    },
    {
        link: "images/ike/ike8.jpg"
    },
    {
        link: "images/ike/ike9.jpg"
    },
    {
        link: "images/ike/ike10.jpg"
    },


];


var chrisImages = [

    {
        link: "images/chris/chris1.jpg"
    },
    {
        link: "images/chris/chris2.jpg"
    },
    {
        link: "images/chris/chris3.jpg"
    },
    {
        link: "images/chris/chris4.jpg"
    },
    {
        link: "images/chris/chris5.jpg"
    },
    {
        link: "images/chris/chris6.jpg"
    },
    {
        link: "images/chris/chris7.jpg"
    },
    {
        link: "images/chris/chris8.jpg"
    },
    {
        link: "images/chris/chris9.jpg"
    },
    {
        link: "images/chris/chris10.jpg"
    },


];

var mikeMore = [

    {
        link: "images/mike/more/mike11.png"
    },
    {
        link: "images/mike/more/mike12.png"
    },

    {
        link: "images/mike/more/mike13.png"
    },
    {
        link: "images/mike/more/mike14.png"
    },
    {
        link: "images/mike/more/mike15.png"
    },
    {
        link: "images/mike/more/mike16.png"
    },
    {
        link: "images/mike/more/mike17.png"
    },
    {
        link: "images/mike/more/mike18.png"
    },
    {
        link: "images/mike/more/mike19.png"
    },
    {
        link: "images/mike/more/mike12.png"
    },
    {
        link: "images/mike/more/mike21.jpg"
    },
    {
        link: "images/mike/more/mike22.png"
    },
    {
        link: "images/mike/more/mike23.png"
    },
    {
        link: "images/mike/more/mike24.png"
    },
    {
        link: "images/mike/more/mike25.png"
    },
    {
        link: "images/mike/more/mike26.jpg"
    },


];



var chrisMore = [

    {
        link: "images/chris/more/chris11.jpg"
    },
    {
        link: "images/chris/more/chris12.jpg"
    },

    {
        link: "images/chris/more/chris13.jpg"
    },
    {
        link: "images/chris/more/chris14.jpg"
    },
    {
        link: "images/chris/more/chris15.jpg"
    },
    {
        link: "images/chris/more/chris16.jpg"
    },
    {
        link: "images/chris/more/chris17.jpg"
    },
    {
        link: "images/chris/more/chris18.jpg"
    },
    {
        link: "images/chris/more/chris19.jpg"
    },
    {
        link: "images/chris/more/chris12.jpg"
    },
    {
        link: "images/chris/more/chris21.jpg"
    },
    {
        link: "images/chris/more/chris22.jpg"
    },
    {
        link: "images/chris/more/chris23.jpg"
    },
    {
        link: "images/chris/more/chris24.jpg"
    },
    {
        link: "images/chris/more/chris25.jpg"
    },
    {
        link: "images/chris/more/chris26.jpg"
    },


];


var ikeMore = [

    {
        link: "images/ike/more/ike11.jpg"
    },
    {
        link: "images/ike/more/ike12.jpg"
    },

    {
        link: "images/ike/more/ike13.jpg"
    },
    {
        link: "images/ike/more/ike14.jpg"
    },
    {
        link: "images/ike/more/ike15.jpg"
    },
    {
        link: "images/ike/more/ike16.jpg"
    },
    {
        link: "images/ike/more/ike17.jpg"
    },
    {
        link: "images/ike/more/ike18.jpg"
    },
    {
        link: "images/ike/more/ike19.jpg"
    },
    {
        link: "images/ike/more/ike12.jpg"
    },
    {
        link: "images/ike/more/ike21.jpg"
    },
    {
        link: "images/ike/more/ike22.jpg"
    },
    {
        link: "images/ike/more/ike23.jpg"
    },
    {
        link: "images/ike/more/ike24.jpg"
    },
    {
        link: "images/ike/more/ike25.jpg"
    },
    {
        link: "images/ike/more/ike26.jpg"
    },


];


// function to initialize our carousel
function carouselInit() {
    $('.carousel').carousel({
        shift: 50,

    })

}

// carousel on large screens
const carousel = $("<div class='carousel'>"); //create brand new carousel div element

$("#mainArt").append(carousel);

mikeImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel.append(newImage);

});


ikeImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel.append(newImage);

});


chrisImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel.append(newImage);

});

// carousel for small screens
const carousel2 = $("<div class='carousel'>"); //create brand new carousel div element

$("#mainArt2").append(carousel2);

mikeMore.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel.append(newImage);

});


ikeMore.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel2.append(newImage);

});


chrisMore.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel2.append(newImage);

});

carouselInit()
