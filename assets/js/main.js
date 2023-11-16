// //YOUTUBE VIDEO
// $('.play-button').click(function(e){
//     var iframeEl = $('<iframe>', { src: $(this).data('url') });
//     $('#youtubevideo').attr('src', $(this).data('url'));
//     // console.log("clicked")
// })


// $('#close-video').click(function(e){
//     $('#youtubevideo').attr('src', '');
// }); 

// $(document).on('hidden.bs.modal','#myModal', function () {
//     $('#youtubevideo').attr('src', '');
// }); 

// var vid = document.getElementById("gossVideo"); 

// function playVid() { 
//     vid.play(); 
// } 

// function pauseVid() { 
//     vid.pause(); 
// } 

// $(document).ready(function () {
//     var modal = $('#myModal');

//     modal.on('hidden.bs.modal', function () {
//         var video = document.getElementById('localvideo');

//         video.pause();
//     });
// });

document.addEventListener('DOMContentLoaded', function () {

    let burger = document.getElementById('burger');
    let nav = document.getElementById('navbar');
    let navLinks = document.querySelectorAll('.nav-links');
    let bgdark = document.getElementById('bg-container');

    let svcbtn = document.getElementById('serviceTab');
    let tabLeft = document.getElementById('tablistLeft');


    burger.addEventListener('click', function(e){
        this.classList.toggle('is-open');
        nav.classList.toggle('open-navbar');
        bgdark.classList.toggle('bg-open-container');
        // console.log("clicked burger menu")
    })


    svcbtn.addEventListener('click', function(e){
        tabLeft.classList.toggle('open-lefttab');
        // console.log("button for closing tab")
    });




    document.body.addEventListener('click', function () {
        // Close the navbar when clicking outside of it
        if(!nav.contains(event.target) && !burger.contains(event.target) ){
            burger.classList.remove('is-open');
            nav.classList.remove('open-navbar');
            bgdark.classList.remove('bg-open-container');
        }

        if(!svcbtn.contains(event.target) && !tabLeft.contains(event.target) ){
            tabLeft.classList.remove('open-lefttab');
        }
      
    });


     // Add event listeners to close the navbar when clicking on a nav link
     navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {

            e.stopPropagation();

            burger.classList.remove('is-open');
            nav.classList.remove('open-navbar');
            console.log("navlinks clicked")

            navLinks.forEach(function (navLink) {
                // navLink.classList.remove('active');
                bgdark.classList.remove('bg-open-container');

            });

            // this.classList.add('active');

        });
    });

    // Function to check if the clicked element is a nav link or its descendant
    // function isNavLink(element) {
    //     let currentElement = element;
    //     while (currentElement) {
    //         if (currentElement.classList && currentElement.classList.contains('nav-link')) {
    //             return true;
    //         }
    //         currentElement = currentElement.parentElement;
    //     }
    //     return false;
    // }


   

});
