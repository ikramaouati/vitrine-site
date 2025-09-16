
// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Animation on load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});
	const fields = ["Data Integrity", "Engineering & Construction", "Commissioning & Qualification", "Laboratory Excellance"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  if (isDeleting) {
    currentText = fields[index].substring(0, charIndex--);
  } else {
    currentText = fields[index].substring(0, charIndex++);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === fields[index].length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % fields.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();
// get startd 
// Animation au scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  // cibler les titres, descriptions et cards
  document.querySelectorAll(".section-title, .section-description, .field-card")
    .forEach(el => observer.observe(el));
});


//aboutjs


    

  
// Petit effet d’alerte sur clic image



  
  

//get started 
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".get-started h2, .get-started p, .field-card"
  );

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
//3phpto
document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".photo-card");

  function revealOnScroll() {
    photos.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
 

  
 //exp
 // Quand la page est chargée
document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ On sélectionne les éléments qu’on veut animer
  const elements = document.querySelectorAll(
    ".expertise h2, .expertise-subtitle, .expertise-box"
  );

  // 2️⃣ Fonction qui vérifie si les éléments sont visibles à l’écran
  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect(); // Position par rapport à l’écran

      // Si le haut de l’élément est 50px avant le bas de l’écran → visible
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show"); // Ajout de la classe qui lance l’animation CSS
      }
    });
  }

  // 3️⃣ On lance une fois quand la page se charge
  revealOnScroll();

  // 4️⃣ On relance la fonction à chaque scroll
  window.addEventListener("scroll", revealOnScroll);
});

//we lead 
// Activer les animations quand la section entre dans la vue
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  // Observer les éléments de la section description
  document.querySelectorAll(".desc-title, .desc-text")
    .forEach(el => observer.observe(el));
});

// why us
// Animation scroll pour Why Choose Us
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  revealOnScroll(); // au chargement
  window.addEventListener("scroll", revealOnScroll);
});