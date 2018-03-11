window.onload = function() {
    $("#chrisGallery").hide();
    $("#viewMikeG").hide();
    $("#viewLess").hide();


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
            link: "images/chris/more/chris20.jpg"
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


    // function to initialize our carousel
    function carouselInit() {
        $('.carousel').carousel({
            shift: 50,
        })
    }

    const carousel = $("<div class='carousel'>"); //create brand new carousel div element
    const Div = $("<div>"); // new div
    $("#chrisArt").append(carousel);
    $("#chrisGallery").append(Div);
    chrisImages.forEach(function(result) {
        let pic = result.link;
        let newImage = $("<a class='carousel-item' href='#'>").append(
            "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

        )
        carousel.append(newImage);
    });
    chrisMore.forEach(function(result) {
        let pic = result.link;
        let newImage = $("<a class='card'>").append(
            "<div class= 'dynamicImage'><img src=" + pic + " class='tatImageG'></div></a>"

        )
        Div.append(newImage);
    });


    carouselInit()
}


// view gallery button for mike
$("#viewMore").on("click", function(event) {
    event.preventDefault();
    $("#viewMore").hide();
    $("#chrisGallery").show();
    $("#viewLess").show();
});

// view gallery button for chris
$("#viewLess").on("click", function(event) {
    event.preventDefault();
    $("#chrisGallery").hide();
    $("#viewLess").hide();
    $("#viewMore").show();
});



// Adding an event listener for when the form is submitted
$("#submitButton").on('click', handleFormSubmit);

// submit form function
function handleFormSubmit(event) {

    var bodyInput = $("#message").val().trim();
    var nameInput = $("#name").val().trim();
    var phoneInput = $("#phone").val().trim();
    var emailInput = $("#email").val().trim();
    var time = $("#time").val().trim();
    var date = $("#date").val().trim();
    var appointment = ("I would like to schedule an appointment for " + date + " at " + time)

    event.preventDefault();
    // Don't submit unless the form is complete...... they don't have to give phone#
    if (!nameInput) {
        $("#wrong").text("Please complete the name section");
        $('#pleaseComplete').modal('open');
    }
    else if (!emailInput) {
        $("#wrong").text("Please provide an e-mail address for us to contact you at");
        $('#pleaseComplete').modal('open');
    }
    else if (!bodyInput) {
        $("#wrong").text("Please complete the message section");
        $('#pleaseComplete').modal('open');
    }
    else {
        // Constructing a newMessage
        var newMessage = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            body: bodyInput,
            appointment: appointment

        }; // submit the new message
        submitMessage(newMessage);
        $('#thankYou').modal('open');

        // empty out the input fields
        $("#message").val("");
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#date").val("");
        $("#time").val("");

    }

}
// Submits the message
function submitMessage(message) {
    console.log("about to send message");
    $.get("/send", {
            to: "joshjanculawebpage@gmail.com",
            subject: "New Message",
            html: "<h3>" + "name: " + message.name + "</h3>" + "<br>" +
                "<h4>" + "email: " + message.email + "</h4>" +
                "<h4>" + "phone: " + message.phone + "</h4>" +
                "<p>" + "message: " + message.body + "</p>" +
                "<p>" + "appointment: " + message.appointment + "</p>"

        },
        function(data) {
            if (data == "sent") {
                console.log("Great Success!");
            }
        });
}
