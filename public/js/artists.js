window.onload = function() { 
$("#mikeGallery").hide();
$("#ikeArt").hide();
$("#chrisArt").hide();
$("#viewIkeG").hide();
$("#viewMikeC").hide();
$("#viewChrisG").hide();


var mikeImages = [

    {
        link: "images/mike/mike1.jpg"
    },
    {
        link: "images/mike/mike2.jpg"
    },
    // {
    //     link: "images/mike/mike3.jpg"
    // },
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


// function to initialize our carousel
function carouselInit() {
    $('.carousel').carousel({
        shift: 50,
    })
}

const carousel = $("<div class='carousel'>"); //create brand new carousel div element
const Div = $("<div>"); // new div
$("#mikeArt").append(carousel);
$("#mikeGallery").append(Div);
mikeImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel.append(newImage);
});
mikeImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='card'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImageG'></div></a>"

    )
    Div.append(newImage);
});


const carousel2 = $("<div class='carousel'>"); //create brand new carousel div element
const Div2 = $("<div>"); // new div
$("#ikeArt").append(carousel2);
$("#ikeGallery").append(Div2);
ikeImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel2.append(newImage);
});

ikeImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='card'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImageG'></div></a>"

    )
    Div2.append(newImage);
});

const carousel3 = $("<div class='carousel'>"); //create brand new carousel div element
const Div3 = $("<div>"); // new div
$("#chrisArt").append(carousel3);
$("#chrisGallery").append(Div3);

chrisImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='carousel-item' href='#'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

    )
    carousel3.append(newImage);
   
});
chrisImages.forEach(function(result) {
    let pic = result.link;
    let newImage = $("<a class='card'>").append(
        "<div class= 'dynamicImage'><img src=" + pic + " class='tatImageG'></div></a>"

    )
    Div3.append(newImage);
});


carouselInit()
}


 // view gallery button for mike
  $("#viewMikeG").on("click", function(event) {
    event.preventDefault();
   //hide carousel and button
   $("#mikeArt").hide();
   $("#viewMikeG").hide();
   // show gallery
   $("#mikeGallery").show();
   $("#viewMikeC").show();
  });


// view gallery button for ike
  $("#viewIkeG").on("click", function(event) {
    event.preventDefault();
   //hide carousel and button
   $("#ikeArt").hide();
   $("#viewIkeG").hide();
   // show gallery
   $("#ikeGallery").show();
   $("#viewIkeC").show();
  });



// view gallery button for chris
  $("#viewChrisG").on("click", function(event) {
    event.preventDefault();
   //hide carousel and button
   $("#chrisArt").hide();
   $("#viewChrisG").hide();
   // show gallery
   $("#chrisGallery").show();
   $("#viewChrisC").show();
  });




 // view carousel button for mike
  $("#viewMikeC").on("click", function(event) {
    event.preventDefault();
   //hide carousel and button
   $("#mikeGallery").hide();
   $("#viewMikeC").hide();
   // show gallery
   $("#mikeArt").show();
   $("#viewMikeG").show();
  });


// view gallery button for ike
  $("#viewIkeC").on("click", function(event) {
    event.preventDefault();
   //hide carousel and button
   $("#ikeGallery").hide();
   $("#viewIkeC").hide();
   // show gallery
   $("#ikeArt").show();
   $("#viewIkeG").show();
  });



// view gallery button for chris
  $("#viewChrisC").on("click", function(event) {
    event.preventDefault();
   //hide carousel and button
   $("#chrisGallery").hide();
   $("#viewChrisC").hide();
   // show gallery
   $("#chrisArt").show();
   $("#viewChrisG").show();
  });


// submitTime 
  $("#submitTime").on("click", function(event) {
    event.preventDefault();
   //hide carousel and button
   $("#chrisGallery").hide();
   $("#viewChrisC").hide();
   // show gallery
   $("#chrisArt").show();
   $("#viewChrisG").show();
  });

