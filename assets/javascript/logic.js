

// variable names
var beerName;
var breweryName;
var brewLat;
var brewLng;
var coords = [];
var breweryArray = [];
var glassware;
var abv;
var style;
var ibu;
var website;
var breweryAddress;
var breweryOpen
var breweryRegion


//TODO: create a dropdown or other selector to determine which below function to run


// Initialize and add the map
function initMap() {
  console.log("yo!");

  // The location of kansas
  var breweryMapData = { lat: 39.0119, lng: -98.4842 };
  // The map, centered at kansas
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 3.5, center: breweryMapData });

}



// this function will search for and return information on a beer entered
function callBeer() {

  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search";
  var search = $("#beer-search").val();

  $.ajax({
    url: queryURL,
    method: "GET",
    data: {
      q: search,
      type: "beer",
      withBreweries: "Y",
      withLocations: "Y",
      key: config,
    }
  }).then(function (response) {
    console.log(response)
    var result = response.data;
    var coords = { lat: result[0].breweries[0].locations[0].latitude, lng: result[0].breweries[0].locations[0].longitude };
    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 3.5,
        center: coords
      });


    for (var i = 0; i <= 0; i++) {
      beerName = result[i].name;
      breweryName = result[i].breweries[0].name;
      brewLat = result[i].breweries[0].locations[0].latitude;
      brewLng = result[i].breweries[0].locations[0].longitude;
      abv = result[i].abv;
      style = result[i].style.name;
      ibu = result[i].ibu;
      website = result[i].breweries[0].website;
      //placed new markers
      var marker = new google.maps.Marker({ position: { lat: brewLat, lng: brewLng }, map: map });

    }

  });

};

//TODO: move the below comment to where we want to call the beer search function
// callBeer();



// Initialize and add the map for new function
function initMap() {
  console.log("Homey!");

  // The location of kansas
  var breweryMapData = { lat: 39.0119, lng: -98.4842 };
  // The map, centered at kansas
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 3.5, center: breweryMapData });

}
//This function takes a postal code and returns breweries within a 10 mile radius
function callLocation() {

  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations";
  var search = $("#beer-search").val();

  $.ajax({
    url: queryURL,
    method: "GET",
    data: {
      postalCode: search,
      key: config,
    }
  }).then(function (response) {
    console.log(response)
    var result = response.data;


    for (var i = 0; i < 10; i++) {
      breweryName = result[i].brewery.name;
      brewLat = result[i].latitude;
      brewLng = result[i].longitude;
      website = result[i].website;
      breweryAddress = result[i].streetAddress
      breweryOpen = result[i].openToPublic
      breweryRegion = result[i].region
      //new markers added
      var marker = new google.maps.Marker({ position: { lat: brewLat, lng: brewLng }, map: map });

      if (breweryOpen === "Y") {
        console.log("Open: " + breweryName)
      } else {
        console.log("Closed: " + breweryName)
      }
      
    }

  });

};

//TODO: place this where we want the location function to be called.
// callLocation();



// Initialize and add the map for new function
function initMap() {
  console.log("Dude!");

  // The location of kansas
  var breweryMapData = { lat: 39.0119, lng: -98.4842 };
  // The map, centered at kansas
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 3.5, center: breweryMapData });

}
//This function calls a random beer, then stores its name as a variable to run through the GET beer search function
function callRandom() {
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/beer/random";

  $.ajax({
    url: queryURL,
    method: "GET",
    data: {
      key: config,
    }
  }).then(function (response) {
    console.log(response)
    var result = response.data

    beerName = result.name;

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search";

    $.ajax({
      url: queryURL,
      method: "GET",
      data: {
        q: beerName,
        type: "beer",
        withBreweries: "Y",
        withLocations: "Y",
        key: config,
      }
    }).then(function (response) {
      console.log(response)
      var result = response.data;

      for (var i = 0; i < 10; i++) {
        beerName = result[i].name;
        breweryName = result[i].breweries[0].name;
        brewLat = result[i].breweries[0].locations[0].latitude;
        brewLng = result[i].breweries[0].locations[0].longitude;
        abv = result[i].abv;
        style = result[i].style.name;
        ibu = result[i].ibu;
        website = result[i].breweries[0].website;
        //new markers added
        var marker = new google.maps.Marker({ position: { lat: brewLat, lng: brewLng }, map: map });

      }

    });

  })

};

  //TODO: Place this on a random beer search button
  // callRandom();


  // Old map code TODO: Delete or rewrite based on Johns research


// Initialize and add the map
// function initMap() {
//   // The location of charlotte
//   var breweryMapData = {lat: brewLat, lng: brewLng};
//   // The map, centered at charlotte
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 10, center: breweryMapData});
//   // The marker, positioned at breweryMapData
//   var marker = new google.maps.Marker({
//     position: breweryMapData,
//      map: map
//     });
// }

