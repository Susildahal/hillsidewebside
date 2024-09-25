document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    var loader = document.getElementsByClassName("preloader");
    window.addEventListener("load", function() {
        console.log("Window fully loaded");
        if (loader.length > 0) {
            loader[0].style.display = "none";
            console.log("Preloader hidden");
        }
    });
});



// Toggle button for navbar
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const navbarLinks = document.getElementById('navbar-links');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('nav-open');
    });

    overlay.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('nav-open');
    });
});

// Slideshow functionality
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('showing');
        slides[currentSlide].classList.add('hiding');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.remove('hiding');
        slides[currentSlide].classList.add('showing');
    }

    slides[currentSlide].classList.add('showing');
    setInterval(nextSlide, 3000);
});

    // Scroll-triggered animations
    document.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('.scroll-item');
    
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Optionally reset the animation state if the item is out of view
                    entry.target.classList.remove('visible');
                }
            });
        }, options);
    
        items.forEach(item => {
            observer.observe(item);
        });
    });
    

// form code 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });

    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required';
    }

    // Validate address
    const address = document.getElementById('address');
    if (!address.value.trim()) {
        isValid = false;
        document.getElementById('addressError').textContent = 'Address is required';
    }

    // Validate phone number
    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits';
    }

    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message is required';
    }

    // Show alert message
    if (isValid) {
        alert('Form submitted successfully!');
    } else {
    
        event.preventDefault(); // Prevent form submission if validation fails
    }
});


// this  for the small screen photo slider 



let uniqueCurrentSlide = 0;

function uniqueShowSlide(index) {
const slides1 = document.querySelectorAll('.unique-carousel-slide');
if (index >= slides1.length) uniqueCurrentSlide = 0;
if (index < 0) uniqueCurrentSlide = slides1.length - 1;
const offset = -uniqueCurrentSlide * 100;
document.querySelector('.unique-carousel-wrapper').style.transform = `translateX(${offset}%)`;
}

function uniqueNextSlide() {
uniqueCurrentSlide++;
uniqueShowSlide(uniqueCurrentSlide);
}

function uniquePrevSlide() {
uniqueCurrentSlide--;
uniqueShowSlide(uniqueCurrentSlide);
}

// Optional: Auto slide
setInterval(() => {
uniqueNextSlide();
},2000);

// pop up code 
   function showToast() {
            var overlay = document.getElementById('overlaypopup');
            overlay.classList.add('show');
        }

        // Function to close the toast
        function closeToast() {
            var overlaypopup = document.getElementById('overlaypopup');
            overlaypopup.classList.remove('show');
        }

        // Show toast when the page is reloaded, but not on refresh
        document.addEventListener('DOMContentLoaded', function () {
            // Check if the sessionStorage has a specific key
            if (!sessionStorage.getItem('pageLoaded')) {
                // Show the toast on first page load
                showToast();
                // Set a flag in sessionStorage to mark that the page has been loaded
                sessionStorage.setItem('pageLoaded', 'true');
            }
        });
        // ask by principle and chairman
        const messageSlides = document.querySelectorAll('.slide'); // Array of slides
const previousButton = document.querySelector('.left-arrow'); // Previous button
const nextButton = document.querySelector('.right-arrow'); // Next button
let currentSlideIndex = 0; // Current active slide index

function updateSlidePosition() {
    messageSlides.forEach((slideElement, i) => {
        slideElement.style.transform = `translateX(${100 * (i - currentSlideIndex)}%)`; // Slide movement calculation
    });
}

function moveToNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % messageSlides.length; // Loop to the start after the last slide
    updateSlidePosition();
}

function moveToPreviousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + messageSlides.length) % messageSlides.length; // Loop to the end when going backwards
    updateSlidePosition();
}

// Event listeners for slide navigation
nextButton.addEventListener('click', moveToNextSlide);
previousButton.addEventListener('click', moveToPreviousSlide);

// Initialize slide positions
updateSlidePosition();

        
     

       
        




    
 


