/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = 'Luis Emilio Nathanael De la rosa Meneses'
let currentYear = '2024'
let profilePicture = 'WEEK2/images/IMG-20230729-WA0236.jpg'
let favoriteFoods = ['Pizza', 'Chocolate', 'Sushi'];
let newFavoriteFood = 'Ice Cream';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.getElementById('year')
const imageElement = document.querySelector('img')


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);
foodElement.textContent = favoriteFoods.join(', ');
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');
favoriteFoods.shift();
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');
favoriteFoods.pop();
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');












/* Step 5 - Array */






