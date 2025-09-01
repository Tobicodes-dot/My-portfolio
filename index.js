const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
    }
    });
}, { threshold: 0.2 }); // triggers when 20% of section is visible

sections.forEach(section => {
    observer.observe(section);
});

// ===== CV QR Code Modal =====
const cvBtn = document.getElementById("cvBtn");
const modal = document.getElementById("cvModal");
const close = document.querySelector(".close");

// Generate QR code
new QRCode(document.getElementById("qrcode"), {
    text: "https://drive.google.com/file/d/1QwWKkHYpTkdEjqesMvxhcKUfRdKPMHMU/view?usp=sharing",
    width: 180,
    height: 180
});

// Show modal on click
cvBtn.addEventListener("click", function(e) {
    e.preventDefault(); // stop the link from reloading page
    modal.style.display = "flex";
});

// Close modal
close.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
    card.classList.toggle('expanded');
    });
});


// form  //////////////////////////////////////////////////////////////////

        // Modal open/close
// Navbar button
const hireBtn = document.getElementById("hireBtn");
// Footer button
const hireBtn2 = document.querySelector(".hire-btn2");

// Modal
const hireModal = document.getElementById("hireModal");
const closeHireModal = document.querySelector(".hire-close");

// Function to open modal
function openHireModal() {
  hireModal.style.display = "flex"; // or "block" depending on your CSS
}

// Event listeners
if (hireBtn) hireBtn.addEventListener("click", openHireModal);
if (hireBtn2) hireBtn2.addEventListener("click", openHireModal);

// Close modal
if (closeHireModal) {
  closeHireModal.addEventListener("click", () => {
    hireModal.style.display = "none";
  });
}

// EmailJS integration
document.getElementById("hire-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_pj615dz", "template_xznnu4k", this, "aJWUrS8Qdgr6cJpvZ")
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
        hireModal.style.display = "none";
    }, (err) => {
        alert("Failed to send message: " + JSON.stringify(err));
    });
});

// Certificates Modal Script
const openCertsModal = document.getElementById("openCertsModal");
const certsModal = document.getElementById("certsModal");
const closeCerts = document.querySelector(".close-certs");

openCertsModal.addEventListener("click", () => {
  certsModal.style.display = "flex";
});

closeCerts.addEventListener("click", () => {
  certsModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === certsModal) {
    certsModal.style.display = "none";
  }
});


// DarkMode integration
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    darkToggle.textContent = "☀️";
    } else {
    localStorage.setItem("theme", "light");
    darkToggle.textContent = "🌙";
    }
});

// Load preference on page load
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️";
    }
});

const hamburger = document.querySelector('.hamburger');
const navDrawer = document.querySelector('.nav-drawer');
const navLinks = document.querySelectorAll('.nav-drawer ul li a');

// Toggle drawer
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navDrawer.classList.toggle('show');
  navOverlay.classList.toggle('show');
});

// Close drawer when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navDrawer.classList.remove('show');
    // no preventDefault here → anchor still scrolls properly 🚀
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
