document.addEventListener("DOMContentLoaded", () => {
    const CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
  
    // Mobile navigation toggle
    if (CShamburgerMenu) {
      CShamburgerMenu.addEventListener("click", function () {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        ariaExpanded();
      });
    }
  
    // Checks the value of aria-expanded on the navigation menu and updates it
    function ariaExpanded() {
      const csUL = document.querySelector("#cs-expanded");
      if (csUL) {
        const csExpanded = csUL.getAttribute("aria-expanded");
        csUL.setAttribute("aria-expanded", csExpanded === "false" ? "true" : "false");
      }
    }
  
    // Dropdown menu toggle
    const dropDowns = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
    dropDowns.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("cs-active");
      });
    });
  
    // Set active link dynamically based on current URL
    const navLinks = document.querySelectorAll(".cs-li-link");
    const currentUrl = window.location.pathname; // Get the current path (e.g., "/diensten.html")
  
    navLinks.forEach((link) => {
      // Check if the link's href matches the current URL
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add("cs-active");
      } else {
        link.classList.remove("cs-active");
      }
  
      // Add click listener to dynamically update active class on click
      link.addEventListener("click", () => {
        // Remove the active class from all links
        navLinks.forEach((nav) => nav.classList.remove("cs-active"));
  
        // Add the active class to the clicked link
        link.classList.add("cs-active");
      });
    });
  });
  