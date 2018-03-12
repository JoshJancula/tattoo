window.onload = function() {
    $("#mikeGallery").hide();
    $("#viewLess").hide();
    randomNums();


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
    mikeMore.forEach(function(result) {
        let pic = result.link;
        let newImage = $("<a class='card'>").append(
            "<div class= 'dynamicImage'><img src=" + pic + " class='tatImageG'></div></a>"

        )
        Div.append(newImage);
    });


    carouselInit()



    // view gallery button for mike
    $("#viewMore").on("click", function(event) {
        event.preventDefault();
        $("#viewMore").hide();
        $("#mikeGallery").show();
        $("#viewLess").show();
    });

    // view gallery button for mike
    $("#viewLess").on("click", function(event) {
        event.preventDefault();
        $("#mikeGallery").hide();
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
            randomNums();
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
