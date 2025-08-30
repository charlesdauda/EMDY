$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active')
});

$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, index) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      // Apply delay based on position
      el.style.transitionDelay = `${index * 0.2}s`;
      el.classList.add("active");
    } else {
      el.classList.remove("active");
      el.style.transitionDelay = "0s";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on page load

// Animate whole section
  ScrollReveal().reveal('.reveal', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
  });

  // Animate child elements inside section with stagger
  ScrollReveal().reveal('.reveal h2, .reveal p, .reveal button', {
    duration: 1000,
    distance: '30px',
    origin: 'bottom',
    interval: 200  // delay between each child element
  });

 
  // Base animation config
  const baseConfig = {
    duration: 1000,
    easing: 'ease-out',
    opacity: 0,
    scale: 0.95,
    distance: '40px'
  };

  // Reveal each section as a whole
  ScrollReveal().reveal('.reveal', {
    ...baseConfig,
    origin: 'bottom'
  });

  // Reveal children inside sections with stagger
  ScrollReveal().reveal('.reveal h2, .reveal h3, .reveal p, .reveal img, .reveal button, .reveal a', {
    ...baseConfig,
    interval: 200, // stagger effect
    distance: '30px',
    origin: 'bottom'
  });



