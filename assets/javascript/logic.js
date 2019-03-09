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
//     key: ""
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

// Initialize and add the map
function initMap() {
  // The location of charlotte
  var charlotte = {lat: 35.227085, lng: -80.843124};
  // The map, centered at charlotte
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: charlotte});
  // The marker, positioned at charlotte
  var marker = new google.maps.Marker({position: charlotte, map: map});
}

