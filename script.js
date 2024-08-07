const nameInput = document.getElementById('name');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const hobbiesInput = document.getElementById('hobbies');
const departmentSelect = document.getElementById('department');
const submitButton = document.getElementById('submit');
const displayDiv = document.getElementById('display');

submitButton.addEventListener('click', () => {
  const name = nameInput.value;
  const hobbies = hobbiesInput.value
  const department = departmentSelect.value;
  const city = cityInput.value;
  const state = stateInput.value;

  // Format the output
  const output = `I am ${name}. I am from ${city}, ${state}. I am from the department of ${department}. My hobbies are ${hobbies}.`;
  displayDiv.innerHTML = output; // Display the formatted output
});
