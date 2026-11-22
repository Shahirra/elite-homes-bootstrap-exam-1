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