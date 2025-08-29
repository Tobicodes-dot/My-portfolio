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
const hireBtn = document.getElementById("hireBtn");
const form = document.getElementById("hire-form");
const hireModal = document.getElementById("hireModal");
const hireCloseBtn = document.querySelector(".hire-close");

hireBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hireModal.style.display = "flex";
});

hireCloseBtn.addEventListener("click", () => {
    hireModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === hireModal) hireModal.style.display = "none";
});

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