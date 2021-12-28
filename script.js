//Building the HTML body element and necessary tags
document.body.innerHTML = `
<div class="Container">
    <h1><b> How Common is your Name across the Nations??</b>
        <h1>
            <h3> The Most Common /Popular Names can vary Nationally,Regionally,Communally and also Culturally...!!</h3>
            <br>
            <h4> Lets Find out...! <h4>
                    <input type="search" id="username" placeholder="Enter Your First Name">
                    <button id="submit" onclick="getusername()">Search</button>
                    <p class="output" id="output"></p>
</div>
<div class="resultContainer" id="resultContainer">
    <div class="container">`;

// Getting the input from the user
let input = document.getElementById("username");
var users;

//Fetching the API by fetch method using asynchronous function
function getusername() {
  //console.log(input.value);
  async function getAPI() {
    const url = `https://api.nationalize.io/?name=${input.value}`;
    const response = await fetch(url);

    users = await response.json();
    resultContainer.innerHTML = "";

    console.log(users);

    displayResult();
  }
  getAPI();
  
  // Funtion to display the probability of countries in browser viewport
  function displayResult() {
    const name = input.value;
    const id = users.country.map((i) => i.country_id);
    const prob = users.country.map((i) => i.probability);
    //console.log(name, ...id, ...prob);
    
    let resultContainer = document.getElementById("resultContainer");
 //Building result container to hold the results
    resultContainer.innerHTML += `
     <h4 class="userName">Results for the Name <span><b>${input.value.toUpperCase()}</b></span></h4>
        <h2 class="para">Country Code:<span>${id[0]}</span></h2>
        <h2 class="para">Probability:<span>${prob[0].toFixed(2)}</span></h2><br>
        <h2 class="para">Country Code:<span>${id[1]}</span></p>
        <h2 class="para">Probability:<span>${prob[2].toFixed(2)}</span></p><br>`;
  }
}
