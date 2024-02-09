/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  // Process each temple in the temple array
  temples.forEach((temple) => {
    // Create an HTML <article> element
    const article = document.createElement("article");

    // Create an HTML <h3> element and add the temple's templeName property
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create an HTML <img> element
    const img = document.createElement("img");
    // Add the temple's imageUrl property to the src attribute
    img.src = temple.imageUrl;
    // Add the temple's location property to the alt attribute
    img.alt = temple.location;

    // Append the <h3> element and the <img> element to the <article> element
    article.appendChild(h3);
    article.appendChild(img);

    // Append the <article> element to the global templesElement variable
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
  // Declare a const variable named response that awaits the built-in fetch method
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

  // Convert fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable
  templeList = await response.json();

  // Call the displayTemples function and pass it the list of temples (templeList)
  displayTemples(templeList);
};

/* reset Function */
const reset = () => {
  // Clear all <article> elements from templesElement
  templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
  // Call the reset function to clear the output
  reset();

  // Define a variable named filter that obtains the value of the HTML element with the ID of filtered
  const filter = document.getElementById("filtered").value;

  // Use a switch statement to filter the temples parameter based on the selected filter value
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      console.error("Invalid filter value");
  }
};

getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => filterTemples(templeList));
