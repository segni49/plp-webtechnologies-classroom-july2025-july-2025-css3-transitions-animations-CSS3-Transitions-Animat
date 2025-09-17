// =======================
//  Part 2: JavaScript Functions
// =======================

// Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Demonstrate local vs global scope
let globalWidth = 10;

function showArea() {
  let localHeight = 5; // local scope
  const area = calculateArea(globalWidth, localHeight);
  document.getElementById("areaResult").textContent = `Area: ${area}`;
}

document.getElementById("calculateBtn").addEventListener("click", showArea);

// =======================
//  Part 3: Trigger CSS Animation with JS
// =======================

// Reusable function to trigger animation
function triggerAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.remove("hidden"); // make visible
  el.classList.add(className);   // add animation class
}

document.getElementById("animateBoxBtn").addEventListener("click", () => {
  triggerAnimation("animatedBox", "animate");
});
