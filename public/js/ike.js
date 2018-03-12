window.onload = function() {
    $("#ikeGallery").hide();
    $("#viewLess").hide();
    $("#contactForm").hide();
    randomNums();


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

    const carousel = $("<div class='carousel'>"); //create brand new carousel div element
    const Div = $("<div>"); // new div
    $("#ikeArt").append(carousel);
    $("#ikeGallery").append(Div);
    ikeImages.forEach(function(result) {
        let pic = result.link;
        let newImage = $("<a class='carousel-item' href='#'>").append(
            "<div class= 'dynamicImage'><img src=" + pic + " class='tatImage'></div></a>"

        )
        carousel.append(newImage);
    });
    ikeMore.forEach(function(result) {
        let pic = result.link;
        let newImage = $("<a class='card'>").append(
            "<div class= 'dynamicImage'><img src=" + pic + " class='tatImageG'></div></a>"

        )
        Div.append(newImage);
    });


    carouselInit()

    // finish app button
    $("#finishAppointment").on("click", function(event) {
        event.preventDefault();
        $("#contactButton").hide();
        $("#contactForm").show();
    });


    //  needed because modal is breaking form 
    $("#sorry").on("click", function(event) {
        $("#contactForm").show();
    });


    // contact button
    $("#contactButton").on("click", function(event) {
        event.preventDefault();
        $("#contactForm").show();
        $("#contactButton").hide();
    });

    // hide the form
    $("#hideForm").on("click", function(event) {
        event.preventDefault();
        $("#contactForm").hide();
        $("#contactButton").show();

    });

    // view gallery button for ike
    $("#viewMore").on("click", function(event) {
        event.preventDefault();
        $("#viewMore").hide();
        $("#ikeGallery").show();
        $("#viewLess").show();
    });

    // view gallery button for ike
    $("#viewLess").on("click", function(event) {
        event.preventDefault();
        $("#ikeGallery").hide();
        $("#viewLess").hide();
        $("#viewMore").show();
    });



    function randomNums() {
        var randNum1 = Math.floor(Math.random() * 20) + 1;
        var randNum2 = Math.floor(Math.random() * 20) + 1;
        document.getElementById("digit1").innerHTML = randNum1;
        document.getElementById("digit2").innerHTML = randNum2;

    }

    // Adding an event listener for when the form is submitted
    $("#submitButton").on('click', handleFormSubmit);

    // submit form function
    function handleFormSubmit(event) {

        var answer = $("#answer").val();
        var digit1 = parseInt(document.getElementById("digit1").innerHTML);
        var digit2 = parseInt(document.getElementById("digit2").innerHTML);
        var sum = digit1 + digit2;
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
        else if (answer === null || answer === "") {
            $("#wrong").text("Please add the numbers together");
            $('#pleaseComplete').modal('open');
            randomNums();
        }
        else if (answer != sum) {
            $("#wrong").text("Your math is wrong!");
            $('#pleaseComplete').modal('open');
            $("#answer").val("");
            randomNums()
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
            $("#answer").val("");

        }
        $("#contactForm").hide();
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

}
