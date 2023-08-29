// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// sticky navbar
window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        }
    })


let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove menu icon navbar when click navbar kink (scroll)
menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');

};

// Swipper
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // dark light mode

 let darkModeIcon = document.querySelector('#darkMode-icon');
 darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-modes');
 };

 ScrollReveal({ 
  //  reset: true,
   distance: '80px',
   duration: 2000,
   Delay: 200
});

ScrollReveal().reveal('.home-content h1, .heading, ', { origin: 'top' });
ScrollReveal().reveal('.sub-heading, .home-img img, .services-container, .portfolio-box, .t-wrapper,  .contact form', { origin: 'bottom' }); 
ScrollReveal().reveal(' .about-img img, .home-content h3, .home-content p', { origin: 'left' });
ScrollReveal().reveal(' .about-content', { origin: 'left' });


// recieve form input
// function sendEmail(){
//    sendEmail.send({
//     Host: "smtp.gmail.com",
//     Username: "amarjeet568kumar@gmail.com",
//     Password: "#Amar2002@",
//     To: 'aprakash9771kumar@gamil.com',
//     From: document.getElementById("email").value,
//     Subject: "Sending Email using javascript",
//     Body: "Well that was easy!!"
//    }).then (
//     message => alert(message)
//    );
// };