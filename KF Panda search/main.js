// Kung Fu Panda Character Search

document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("search-in").value;

  if (name === "Po") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="Images/po.png" alt="kung fu panda character" />
        <h2>Po</h2>
        <p class="quote">"Buddy, I am the Dragon Warrior"</p>
        `;
  } else if (name === "Mantis") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="Images/mantis.png" alt="kung fu panda character" />
    <h2>Mantis</h2>
    <p class="quote">"Fear the bug!"</p>
    `;
  } else if (name === "monkey") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="Images/monkey.png" alt="kung fu panda character" />
  <h2>Monkey</h2>
  <p class="quote">"We should hang out!"</p>
  `;
  } else if (name === "crane") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="Images/crane.png" alt="kung fu panda character" />
  <h2>Crane</h2>
  <p class="quote">"You can chain my body, but you will never chain my warrior spirit!"</p>
  `;
  } else if (name === "tigress") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="Images/tigress.png" alt="kung fu panda character" />
  <h2>tigress</h2>
  <p class="quote">"That was pretty hardcore!"</p>
  `;
  } else if (name === "viper") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="Images/viper.png" alt="kung fu panda character" />
  <h2>Viper</h2>
  <p class="quote">"I don't need to bite to fight!"</p>
  `;
  }
}

// Po: "Buddy, I am the Dragon Warrior."
// Crane: "You can chain my body, but you will never chain my warrior spirit!"
// Mantis: "Fear the bug!"
// Monkey: "We should hang out!"
// Tigress: "That was pretty hardcore!"
// Viper: "I don't need to bite to fight!"
