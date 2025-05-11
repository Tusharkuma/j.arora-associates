/* AOS Initialization Scriptd*/

// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
  // Add scroll class to nav when scrolled
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Animate elements with data-aos attribute
  const animateElements = document.querySelectorAll("[data-aos]");
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // whatsapp scroll appearance at bottom
  const whatsappBtn = document.querySelector(".whatsapp_main");

  if (whatsappBtn) {
    whatsappBtn.style.opacity = "0";
    whatsappBtn.style.visibility = "hidden";
    whatsappBtn.style.position = "fixed";
    whatsappBtn.style.bottom = "80px";
    whatsappBtn.style.right = "20px";
    whatsappBtn.style.zIndex = "998";
    whatsappBtn.style.transition = "all 0.3s ease";
  }

  // Scroll to top button
  const scrollTopBtn = document.createElement("div");
  scrollTopBtn.className = "scroll-top";
  scrollTopBtn.innerHTML = "↑";
  document.body.appendChild(scrollTopBtn);
  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 2000) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }

    // Control WhatsApp button visibility
    if (whatsappBtn) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        // Get the position of the contact section
        const contactRect = contactSection.getBoundingClientRect();

        // Show WhatsApp icon when contact section is visible in viewport
        // or when user is very close to bottom of page
        if (
          // When contact section is visible or almost visible
          contactRect.top <= window.innerHeight * 0.9 ||
          // When almost at bottom of page
          (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200
        ) {
          // Make WhatsApp button visible
          whatsappBtn.style.opacity = "1";
          whatsappBtn.style.visibility = "visible";
        } else {
          // Hide WhatsApp button
          whatsappBtn.style.opacity = "0";
          whatsappBtn.style.visibility = "hidden";
        }
      }
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });


});