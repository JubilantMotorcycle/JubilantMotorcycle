// Helper functions to communicate with Firebase

/* NOTE: This may all change if we incorporate the GeoBase library Jason found */
/* We may either replace these functions,
/* or rewrite them in the style of the GB library, 
/* or most probably just implement them by calling from the GeoBase library */
/* stay tuned while we investigate! */

// fbUrl is a variable in config.js . Best way to pull it in?


var firebaseRef = new Firebase(fbUrl);

var geoFire = new GeoFire(firebaseRef);

// Should we rewrite these function signatures to allow callbacks?
/* no return*/
var submitMeal = function(
  // an object {latitude: x, longitude: y}
  location,
  // should this be format-agnostic?
  picture,
  // "dessert", "entre", "small dish". xc: Could also maybe let 'category' take an object w/ several applicable categories.
  category,
  // boolean
  vegetarian,
  description,
  username
  // could add "callback" as an argument to some of these
  ){

};

/* returns an (array?) of mealIDs and pictures*/
/* for MVP, simply give all */
var getMeals = function(
  radius,
  location,
  /*optional*/
  category,
  vegetarian,
  /*xc optional*/
  /*take a string and parse it into words*/
  searchString,
  /*xc takes in username to match to searcher's preferences*/
  searcher){
  // implementation handles null case for optional variables
};

/* returns details about one meal */
var getMealDetails = function(
  mealID
  )

var rateMeal = function(
  /* user ID */
  rater,
  /* 'want', 'like', tried'*/
  rating,
  mealID

) 

/* XC */
var editMeal = function(
){
};
