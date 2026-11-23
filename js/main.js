// Start Services Tabs

const serviceTabs = document.querySelectorAll(".service-tab");
const serviceContents = document.querySelectorAll(".service-content");

function showService(tab) {

    // Remove active class from all tabs
    serviceTabs.forEach(function (item) {
        item.classList.remove("active");
    });

    // Hide all contents
    serviceContents.forEach(function (content) {
        content.classList.remove("active");
    });

    // Activate selected tab
    tab.classList.add("active");

    // Show selected content
    const targetContent = document.getElementById(tab.dataset.tab);

    targetContent.classList.add("active");
}

// Click on tabs
serviceTabs.forEach(function (tab) {

    tab.addEventListener("click", function () {
        showService(tab);
    });

});

// End Services Tabs


// Start Navbar Active Link on Scroll

const navbar = document.querySelector(".custom-navbar");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link[href^='#']");

const sections = document.querySelectorAll(
  "#home, #properties, #services, #testimonials, #faq, #contact"
);

function updateActiveLink() {
  let currentSection = "home";

  const scrollPosition =
    window.scrollY + navbar.offsetHeight + 100;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);

    const isActive = targetId === currentSection;

    link.classList.toggle("active", isActive);
    link.classList.toggle("fw-bold", isActive);
  });
}

// Detect Scroll
window.addEventListener("scroll", updateActiveLink);

// Set Initial Active Link
window.addEventListener("load", updateActiveLink);

// End Navbar Active Link on Scroll
