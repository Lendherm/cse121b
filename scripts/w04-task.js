//w04-task.js

/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "Luis Emilio Nathanael De la rosa Meneses",
  photo: 'images/IMG-20230729-WA0236.jpg',
  favoriteFoods: [
    'Sushi',
    'Pizza',
    'Chocolate',
    'Avocado Toast',
    'Ice Cream'
  ],
  hobbies: [
    'Reading',
    'Coding',
    'Hiking',
    'Photography',
    'Playing Guitar'
  ],
  placesLived: [
    {
      place: 'Campinas, BR',
      length: '9 months'
    },
    {
      place: 'Puebla, MX',
      length: '10 months'
    },
    {
      place: 'Edo. Mex, MX',
      length: '3 years'
    }
  ]
};

/* Populate Profile Object with placesLive objects */
// (Already populated in the myProfile object)

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(function(food) {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(function(hobby) {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(function(placeInfo) {
  let dtElement = document.createElement('dt');
  dtElement.textContent = placeInfo.place;

  let ddElement = document.createElement('dd');
  ddElement.textContent = placeInfo.length;

  placesLivedList.appendChild(dtElement);
  placesLivedList.appendChild(ddElement);
});
