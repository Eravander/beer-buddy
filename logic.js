function callBeer() {
  
  var queryURL =  "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search";

// $.ajax({
//   url: queryURL,
//   method: "GET",
//   data: {
//     q: "sugar creek",
//     type: "brewery",
//     type: "beer",
//     withBreweries: "Y",
//     withLocations: "Y",
//     key: "d06f72cfa4d269c5b3840f2ed2b5988c"
//   } 
// }).then(function (response) {
//   console.log(response)

//   });

//   };

//   callBeer();

$.ajax({
url: queryURL,
method: "GET",
data: {
  q: "American IPA",
  withBreweries: "Y",
  withLocations: "Y",
  key: config
} 
}).then(function (response) {
console.log(response)

});

};

callBeer();