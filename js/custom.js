var swiper = new Swiper(".bestSeller", {
  loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView:1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
  });

  let lastScrollY = window.scrollY; // Keep track of the last scroll position

window.addEventListener('scroll', function() {
  if (window.scrollY > lastScrollY) {
    // User is scrolling down
    document.querySelector('.free-delivery').classList.add('d-none');
  } else {
    // User is scrolling up
    document.querySelector('.free-delivery').classList.remove('d-none');
  }

  // Update the last scroll position
  lastScrollY = window.scrollY;
});

const sizeButtons = document.querySelectorAll('.select_size button');
const ml = document.querySelector('.ml');  

sizeButtons.forEach((button)=> {
  button.addEventListener('click', function() {
    const size = this.textContent;

    sizeButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    this.classList.add("active");
    ml.textContent = size;  
  });
});



const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const userQuantity = document.querySelector('.user-quantity');
console.log(minus,plus,userQuantity )


let quantity = 1;
userQuantity.value = quantity;

minus.addEventListener('click', function() {
  if (quantity > 1) { 
    quantity--; 
    userQuantity.value = quantity; 
  }
});

plus.addEventListener('click', function() {
  quantity++; 
  userQuantity.value = quantity;
});


