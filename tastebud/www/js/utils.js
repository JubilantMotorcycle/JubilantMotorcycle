// This file is not currently used

// Helper functions to communicate with Firebase

/* NOTE: This may all change if we incorporate the GeoBase library Jason found */
/* We may either replace these functions,
/* or rewrite them in the style of the GB library, 
/* or most probably just implement them by calling from the GeoBase library */
/* stay tuned while we investigate! */

// fbUrl is a variable in config.js . Best way to pull it in?


var firebaseRef = new Firebase(fbUrl);
var geoFire = new GeoFire(firebaseRef);

var mealsRef = firebaseRef.child("meals");
// for XC
var categoriesRef = firebaseRef.child("categories");
var usersRef = firebaseRef.child("users");

/* UTIL FUNCTIONS

/* takes a location object {lat: x, long: y}, a .jpeg picture, a category ("dessert", "entre", "small dish"),
a boolean for whether the meal is vegetarian, a String destription and username. Places the new meal
in all appropriate Firebase locations. Returns nothing. */
var submitMeal = function(location, picture, category, vegetarian, description, username){

  console.log("meal received for submission");
  
  // we can encode pictures with 64 bits, 
  // or we can store them in an S3 bucket
  mealsRef.push({
    location: location,
    picture: picture
  });

  // XC: make duplicate push to usersRef  
};

/* finds all meals that meet certain critera within a given radius   
(for MVP, ignores map and simply returns all meals in database)
Optional arguments include category, vegetarian (boolean), searchString,
Ideal function will parse search string into words, and match against
descriptions in Firebase. Returns an (array?) of objects. For MVP, objects in the
returned array will have all information about the item. In later iterations,
only the mealID (from Firebase), picture, and location. Retrieve the rest using
getMealDetails upon app-user's tap */
var getMeals = function(radius, location, category, vegetarian, searchString, searcher){
  console.log("getting a list of meals");
  // very strange object is returned. unsure how to turn it into an array of
  // objects and to get Firebase ID for each.
  var meals = mealsRef.orderByKey();
  console.log(meals);
  for (var prop in meals.path.w){
    console.log(prop);
  } 
};

/* XC 
/* returns details about one meal */
var getMealDetails = function(mealID){

};

/* rater is a user's ID, rating is either 'want', 'like', or 'tried' */
var rateMeal = function(rater, rating, mealID){
};

/* XC */
var editMeal = function(){
};

// TESTS

var testUpdate = function(){
  console.log('second test');
  cookieRef = dessertsRef.child("JkcxIyuUtQFeOHDqpO2");
  cookieRef.update({'buttered': true});
};

var testSubmit = function(){
  var pic = "../img/Hamburger example.jpg";
  submitMeal('loc', pic);
};

var testDiscover = function(){
  getMeals(1);
};

var testAllDetails = function(){
  getMealDetails();
}
