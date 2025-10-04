// Course card flip
document.querySelectorAll(".course-card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
});



// Mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});

// Event Search
const searchInput = document.getElementById("search-events");
const events = document.querySelectorAll(".event-card");

searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();
  events.forEach(event => {
    const name = event.getAttribute("data-name").toLowerCase();
    event.style.display = name.includes(query) ? "block" : "none";
  });
});




// FAQ toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});

