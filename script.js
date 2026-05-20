const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const ticketSelect = document.querySelector("#ticket-select");
const ticketQuantity = document.querySelector("#ticket-quantity");
const ticketTotal = document.querySelector("#ticket-total");
const form = document.querySelector("#registration-form");
const formMessage = document.querySelector("#form-message");

// Example conversion rate: 1 USD = 3700 UGX

const USD_TO_UGX = 3700;

function updateTotal() {
    const priceUGX = Number(ticketSelect.value);
    const quantity = Math.max(1, Number(ticketQuantity.value || 1));

    ticketQuantity.value = quantity;

    const totalUGX = priceUGX * quantity;

    ticketTotal.textContent = `UGX ${totalUGX.toLocaleString()}`;
}



navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

ticketSelect.addEventListener("change", updateTotal);
ticketQuantity.addEventListener("input", updateTotal);

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload
    formMessage.textContent = "Registration submitted successfully!";
    formMessage.style.color = "green"; // optional styling
});



updateTotal();
