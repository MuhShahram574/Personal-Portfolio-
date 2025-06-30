AOS.init({
  once: false, 
  mirror: true, 
  offset: 100, 
});
// navbar code

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => {
      nav.style.backgroundColor = "";
    });

    link.style.backgroundColor = "rgba(52, 229, 255, 0.1)";
  });
});

let navToggle = document.querySelector(".nav-toggle");
let navbar = document.querySelector(".navbar");

console.log(navbar);

navToggle.addEventListener("click", () => {

    navbar.classList.add(navbar.active);
    console.log(navbar);
});

// Custom cursor code
let cursor = document.querySelectorAll(".cursor");
let Anchers = document.querySelectorAll("a");

function cursorMove(e) {
  cursor.forEach((el) => {
    // Use fixed positioning with client coordinates
    el.style.position = "fixed";
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
  });
}

// Move event listeners outside the mousemove handler
cursor.forEach((el) => {
  Anchers.forEach((Ancher) => {
    Ancher.addEventListener("mouseover", () => {
      el.classList.add("hover");
    });
    Ancher.addEventListener("mouseleave", () => {
      el.classList.remove("hover");
    });
  });
});

window.addEventListener("mousemove", cursorMove);

// force the video to keep playing
document.addEventListener("visibilitychange", function () {
  let video = document.getElementById("bgVideo");
  if (document.hidden) {
    video.play(); // Keep playing even if the tab is inactive
  }
});

// Target elements
const aboutSections = document.querySelectorAll(
  "#about-section, #education, #learning, #work-section, #skills-section, #tools-section, #contact-section"
);
const heroSection = document.querySelector("#heros-section"); // Hero Section
const scrollUp = document.querySelector(".scroll-up"); // Scroll-Up Button

// Show Scroll-Up when entering About Me or other sections
const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollUp.style.display = "flex";
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all sections except hero
aboutSections.forEach((section) => aboutObserver.observe(section));

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const scrollingUp = entry.boundingClientRect.top >= 0;
        "Intersection detected:",
          {
            scrollingUp,
            top: entry.boundingClientRect.top,
          };
        scrollUp.style.display = "none";
      } else {
        scrollUp.style.display = "flex";
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "0px",
  }
);

// Make sure we're observing the hero section
if (heroSection) {
  heroObserver.observe(heroSection);
} else {
  console.error("Hero section not found!");
}

// Remove the about sections observer since we can handle everything in the hero observer
aboutSections.forEach((section) => aboutObserver.unobserve(section));

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navbar = document.querySelector(".navbar");

  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});

/////////////////
// LOADER //
/////////////////
// Create preloader HTML structure
document.body.insertAdjacentHTML(
  "afterbegin",
  `
  <div class="preloader">
    <div class="preloader-inner">
      <figure class="preloader-figure">
        <div style="--i: 1"></div>
        <div style="--i: 2"></div>
        <div style="--i: 3"></div>
        <div style="--i: 4"></div>
        <div style="--i: 5"></div>
        <div style="--i: 6"></div>
        <div style="--i: 7"></div>
        <div style="--i: 8"></div>
        <div style="--i: 9"></div>
        <div style="--i: 10"></div>
        <div style="--i: 11"></div>
        <div style="--i: 12"></div>
      </figure>
    </div>
  </div>
`
);

// Add necessary CSS
const style = document.createElement("style");
style.textContent = `
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background:  #0b1028;
    z-index: 9999;
    transition: opacity 0.5s ease;
    display:"none";
  }

  .preloader.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .preloader-inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .preloader-figure {
    --size: 15vmin;
    --duration: 4s;
    --direction: 1;
    --pull: -1.25;
    perspective: 30rem;
    display: grid;
    grid-template-areas: "figure";
    place-items: center;
    inline-size: var(--size);
    aspect-ratio: 1;
    animation: spin var(--duration) ease-in-out infinite;
  }

  .preloader-figure > * {
    --radius: calc(var(--size) / 2);
    --deg: calc(var(--i) * (360deg / 12));
    --hs: 225 100%;
    grid-area: figure;
    background-color: hsl(var(--hs) 60%);
    inline-size: calc(var(--size) / 4);
    aspect-ratio: 1;
    clip-path: polygon(25% 25%, 100% 50%, 25% 75%, 0% 50%);
    transform: translate3d(
      calc(cos(var(--deg)) * var(--radius)),
      calc(sin(var(--deg)) * var(--radius)),
      0
    ) rotate(calc(var(--deg)));
    transform-style: preserve-3d;
    animation: diamonds var(--duration) cubic-bezier(0.87, 0, 0.13, 1) infinite;
  }
`;
document.head.appendChild(style);

// JavaScript preloader logic
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const minimumDisplayTime = 2000; // 2 seconds minimum display
  const startTime = Date.now();
  let loaded = false;
  let timeout;

  // Function to hide preloader
  function hidePreloader() {
    window.addEventListener("load", () => {
      loaded = true;
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumDisplayTime - elapsedTime;

      setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(() => {
          preloader.remove();
        }, 500);
      }, Math.max(0, remainingTime));
    });
  }

  // Set a maximum wait time (e.g., 5 seconds)
  timeout = setTimeout(() => {
    if (!loaded) {
      preloader.classList.add("hidden");
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  }, 5000);

  // Execute preloader hiding logic
  hidePreloader();
});
