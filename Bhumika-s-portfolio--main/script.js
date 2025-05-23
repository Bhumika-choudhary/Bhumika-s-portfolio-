$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing",{
		strings: ["Front End Developer", "Software Developer", "Web Designer", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front End Developer", "Software Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// script for form submission 

const scriptURL =
        "https://script.google.com/macros/s/AKfycbxnaOrde8I4W7ESZYlvNjnAqWDPryFMa_z-uZ3n6Hb96GhhKOw7f_Qv75IH2UXLtHCt/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log("Form submission started");

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Form submitted successfully");

            // Display success message
            msg.innerHTML = "Message sent successfully";

            // Clear the message after 5 seconds
            setTimeout(function () {
              msg.innerHTML = "";
            }, 5000);

            // Reset the form
            form.reset();
          })
          .catch((error) => {
            console.error("Error!", error.message);
            msg.innerHTML = "Error submitting form";
          });
      });
