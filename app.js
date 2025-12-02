// Tracks data: name, price per hour, image file name (place images in assets/images/)
const tracks = [
  { id: "le-mans", name: "Le Mans", price: 10000, image: "le-mans.jpg" },
  { id: "monza", name: "Monza", price: 12000, image: "monza.jpg" },
  { id: "silverstone", name: "Silverstone", price: 9000, image: "silverstone.jpg" },
  { id: "spa", name: "Spa-Francorchamps", price: 11000, image: "spa.jpg" },
];

// Format currency as INR
function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

// Populate the dropdown and gallery
function renderUI() {
  const select = document.getElementById("trackSelect");
  const grid = document.getElementById("tracksGrid");

  // Dropdown options
  select.innerHTML = tracks.map(t => `
    <option value="${t.id}">
      ${t.name} - ${formatINR(t.price)}/hour
    </option>
  `).join("");

  // Cards grid
  grid.innerHTML = tracks.map(t => `
    <div class="card">
      <img src="assets/images/${t.image}" alt="${t.name} track"/>
      <div class="card-content">
        <div class="card-title">${t.name}</div>
        <div class="card-price">${formatINR(t.price)}/hour</div>
      </div>
    </div>
  `).join("");
}

// Calculate total on button click
function setupCalculator() {
  const select = document.getElementById("trackSelect");
  const hoursInput = document.getElementById("hoursInput");
  const result = document.getElementById("result");
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", () => {
    const selected = tracks.find(t => t.id === select.value);
    const hours = parseFloat(hoursInput.value);

    if (!selected) {
      result.textContent = "Please select a track.";
      return;
    }
    if (isNaN(hours) || hours <= 0) {
      result.textContent = "Please enter a valid number of hours.";
      return;
    }

    const total = selected.price * hours;
    result.textContent = `Total Amount: ${formatINR(total)}`;
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderUI();
  setupCalculator();
});

function setupCalculator() {
  const select = document.getElementById("trackSelect");
  const hoursInput = document.getElementById("hoursInput");
  const result = document.getElementById("result");
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", () => {
    const selected = tracks.find(t => t.id === select.value);
    const hours = parseFloat(hoursInput.value);

    if (!selected || isNaN(hours) || hours <= 0) {
      result.textContent = "Please enter valid inputs.";
      return;
    }

    const total = selected.price * hours;
    result.textContent = `Total Amount: ${formatINR(total)}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderUI();
  setupCalculator();
});