//If use Nav colour change

// <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

function fillText(info) {
    document.getElementById('social-info').innerHTML = info;
    console.log(info);
}

function nofillText() {
    document.getElementById('social-info').innerHTML = '';
}

// First portfolio testwork

function movePicture1() {
    document.getElementById('portfolio1').style.top = '-260vh';
    document.getElementById('portfolio1').style.transition = '5s ease-in-out';

    document.getElementById('dark-theme1').style.opacity = '0.8';
    document.getElementById('dark-theme1').style.transition = '3s ease-in-out';

    document.getElementById('show-btn1').style.opacity = '1';
    document.getElementById('show-btn1').style.transition = '3s ease-in-out';
}

function returnPicture1() {
    document.getElementById('portfolio1').style.top = '0';
    document.getElementById('portfolio1').style.transition = '5s ease-in-out';

    document.getElementById('dark-theme1').style.opacity = '0';
    document.getElementById('dark-theme1').style.transition = '3s ease-in-out';

    document.getElementById('show-btn1').style.opacity = '0';
    document.getElementById('show-btn1').style.transition = '3s ease-in-out';
}

function paintButton1() {
    document.getElementById('show-btn1').style.background = "#F5D6BA";
    document.getElementById('show-btn1').style.color = "#2C2C2C";
}

function repaintButton1() {
    document.getElementById('show-btn1').style.background = "none";
    document.getElementById('show-btn1').style.color = "#F5D6BA";

}

// Second portfolio textwork

function movePicture2() {
    document.getElementById('portfolio2').style.top = '-260vh';
    document.getElementById('portfolio2').style.transition = '5s ease-in-out';

    document.getElementById('dark-theme2').style.opacity = '0.8';
    document.getElementById('dark-theme2').style.transition = '3s ease-in-out';

    document.getElementById('show-btn2').style.opacity = '1';
    document.getElementById('show-btn2').style.transition = '3s ease-in-out';
}

function returnPicture2() {
    document.getElementById('portfolio2').style.top = '0';
    document.getElementById('portfolio2').style.transition = '5s ease-in-out';

    document.getElementById('dark-theme2').style.opacity = '0';
    document.getElementById('dark-theme2').style.transition = '3s ease-in-out';

    document.getElementById('show-btn2').style.opacity = '0';
    document.getElementById('show-btn2').style.transition = '3s ease-in-out';
}

function paintButton2() {
    document.getElementById('show-btn2').style.background = "#F5D6BA";
    document.getElementById('show-btn2').style.color = "#2C2C2C";
}

function repaintButton2() {
    document.getElementById('show-btn2').style.background = "none";
    document.getElementById('show-btn2').style.color = "#F5D6BA";

}

// Third portfolio testwork

function movePicture3() {
    document.getElementById('portfolio3').style.top = '-260vh';
    document.getElementById('portfolio3').style.transition = '5s ease-in-out';

    document.getElementById('dark-theme3').style.opacity = '0.8';
    document.getElementById('dark-theme3').style.transition = '3s ease-in-out';

    document.getElementById('show-btn3').style.opacity = '1';
    document.getElementById('show-btn3').style.transition = '3s ease-in-out';
}

function returnPicture3() {
    document.getElementById('portfolio3').style.top = '0';
    document.getElementById('portfolio3').style.transition = '5s ease-in-out';

    document.getElementById('dark-theme3').style.opacity = '0';
    document.getElementById('dark-theme3').style.transition = '3s ease-in-out';

    document.getElementById('show-btn3').style.opacity = '0';
    document.getElementById('show-btn3').style.transition = '3s ease-in-out';
}

function paintButton3() {
    document.getElementById('show-btn3').style.background = "#F5D6BA";
    document.getElementById('show-btn3').style.color = "#2C2C2C";
}

function repaintButton3() {
    document.getElementById('show-btn3').style.background = "none";
    document.getElementById('show-btn3').style.color = "#F5D6BA";

}

// Navigation text hide

function navTextHide1() {
    document.getElementById('navtext1').innerHTML = "Home";
    document.getElementById('navtext2').innerHTML = "";
    document.getElementById('navtext3').innerHTML = "";
    document.getElementById('navtext4').innerHTML = "";
}

function navTextHide2() {
    document.getElementById('navtext1').innerHTML = "";
    document.getElementById('navtext2').innerHTML = "Portfolio";
    document.getElementById('navtext3').innerHTML = "";
    document.getElementById('navtext4').innerHTML = "";
}

function navTextHide3() {
    document.getElementById('navtext1').innerHTML = "";
    document.getElementById('navtext2').innerHTML = "";
    document.getElementById('navtext3').innerHTML = "About";
    document.getElementById('navtext4').innerHTML = "";
}

function navTextHide4() {
    document.getElementById('navtext1').innerHTML = "";
    document.getElementById('navtext2').innerHTML = "";
    document.getElementById('navtext3').innerHTML = "";
    document.getElementById('navtext4').innerHTML = "Contact";
}

function navTextHideFull() {
    document.getElementById('navtext1').innerHTML = "";
    document.getElementById('navtext2').innerHTML = "";
    document.getElementById('navtext3').innerHTML = "";
    document.getElementById('navtext4').innerHTML = "";
}

// Nav colour change on scroll, Need to check colours

// function navChange() {
//     if($(window).width() < 768){
//         $(document).ready(function(){
//             $(window).scroll(function () {
//                 if($(document).scrollTop() > $('#landing').height() && $(document).scrollTop() < $('#landing').height() + 650){
//                     $(".circle").css('background','#F5D6BA');
//                 }
//                 else{
//                     $(".circle").css('background','#F5D6BA');
//                 }
//             });
//         });
//     } else if ($(window).width() >= 768) {
//         $(document).ready(function(){
//             $(window).scroll(function () {
//                 if($(document).scrollTop() > $('#landing').height()){
//                     $(".circle").css('background','#F5D6BA');
//                 }
//                 else{
//                     $(".circle").css('background','#F5D6BA');
//                 }
//             });
//         });
//     }
// }
