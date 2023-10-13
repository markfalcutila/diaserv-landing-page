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


let burger = document.getElementById('burger');
let nav = document.getElementById('navbar');

burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('open-navbar');
    console.log("clicked burger menu")
})