// variable names
var marker;
var map;
var beerName;
var breweryName;
var brewLat;
var brewLng;
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
  map = new google.maps.Map(
    document.getElementById('map'), { zoom: 3.5, center: breweryMapData });

}

// this function will search for and return information on a beer entered
function callBeer() {

  var queryURL = "https://immense-savannah-32940.herokuapp.com/https://api.brewerydb.com/v2/search";
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
    map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 8,
        center: coords
      });


    for (var i = 0; i < 1; i++) {
      beerName = result[i].name;
      breweryName = result[i].breweries[0].name;
      brewLat = result[i].breweries[0].locations[0].latitude;
      brewLng = result[i].breweries[0].locations[0].longitude;
      abv = result[i].abv;
      style = result[i].style.name;
      ibu = result[i].ibu;
      website = result[i].breweries[0].website;
      //placed new markers
      marker = new google.maps.Marker({ position: { lat: brewLat, lng: brewLng }, map: map });
      //TODO: Dynamically create display card 
      pageTwo();
    }

  });

};

//This function takes a postal code and returns breweries within a 10 mile radius
function callLocation() {

  var queryURL = "https://immense-savannah-32940.herokuapp.com/https://api.brewerydb.com/v2/locations";
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


    for (var i = 0; i < 1; i++) {
      breweryName = result[i].brewery.name;
      brewLat = result[i].latitude;
      brewLng = result[i].longitude;
      website = result[i].website;
      breweryAddress = result[i].streetAddress
      breweryOpen = result[i].openToPublic
      breweryRegion = result[i].region
      //new markers added
      marker = new google.maps.Marker({ position: { lat: brewLat, lng: brewLng }, map: map });
      pageTwoLocation();

      // var beerDiv = $("<div>")
      // var breweryNameDisplay = $("<h2>").text(result[i].brewery.name);
      // var breweryAddress = $("<h3>").text(result[i].streetAddress);
      // var breweryWebsite = $("<p>").text(result[i].website);

      // $("#results").append(beerDiv);
      // beerDiv.append(breweryNameDisplay);
      // beerDiv.append(breweryAddress);
      // beerDiv.append(breweryWebsite);

      // if (breweryOpen === "Y") {
      //   console.log("Open: " + breweryName)
      //   marker = new google.maps.Marker({ position: { lat: brewLat, lng: brewLng }, map: map });
      //   pageTwo();
      // } else {
      //   console.log("Closed: " + breweryName)
      // }

    }

  });

};


//This function calls a random beer, then stores its name as a variable to run through the GET beer search function
function callRandom() {
  var queryURL = "https://immense-savannah-32940.herokuapp.com/https://api.brewerydb.com/v2/beer/random";

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

    var queryURL = "https://immense-savannah-32940.herokuapp.com/https://api.brewerydb.com/v2/search";

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

      for (var i = 0; i < 1; i++) {
        beerName = result[i].name;
        breweryName = result[i].breweries[0].name;
        brewLat = result[i].breweries[0].locations[0].latitude;
        brewLng = result[i].breweries[0].locations[0].longitude;
        abv = result[i].abv;
        style = result[i].style.name;
        ibu = result[i].ibu;
        website = result[i].breweries[0].website;
        //new markers added
        marker = new google.maps.Marker({ position: { lat: brewLat, lng: brewLng }, map: map });
       pageTwo();
      }

    });

  })

};

// function theTridentOfPoseidon() {

//   for (var i=0; i <10; i++) {
//     $(".beer-search-container").append("<tr>")
//       .append("<td>" + beerName + "</td>")
//       .append("<td>" + breweryName + "</td>")
//       .append("<td>" + style + "</td>")
//       .append("<td>" + abv + "</td>")
//       .append("<td>" + ibu + "</td>")
//       .append("<td>" + breweryAddress + "</td>")
//   }

// };

// function createContainer(){

//   var displayDivCon = '<div class="result">' +
//   '<img class="beer-image"> ' +
//   '<div class="beer-name">' + '<a href="#beer">Beer Name</a>' + '</div>' +
//   '<ol>' +
//     '<li>Brewery</li>' +
//     '<li>Style</li>' +
//     '<li>beer :</li>' +
//     '<li>' +'<a href="#directions">Directions</a>'+'</li>' +
  
//   '</ol>' +
  
//   '</div>'

//   var displayDivCon2  = $(".beer-search-container").append(displayDivCon)

//   displayDivCon2 .append(displayDivCon)


// }




$("#primary-search").click(function () {
  event.preventDefault()
  //TODO: Input verification
  //TODO: create attribute or value to differentiate between zip code entry and beer entry
  
  var value = $("#beer-search").val()
  var inputVal = $.isNumeric(value)
  var searchParameter = $('.dropdown').val();
  console.log(value)

  if (searchParameter === "random") {
    callRandom();
    console.log(searchParameter)
  } else if (searchParameter === "beer") {
    callBeer();
    console.log(searchParameter)
  } else if (searchParameter === "zip-code") {
    callLocation();
    console.log(searchParameter)
  }
    console.log(inputVal)
    console.log(value.length)
  if (value.length > 5 && inputVal === true ){
    $("#beer-search").val("")
    $("#beer-search").attr("placeholder", "Not a valid zipcode! Please enter a correct zipcode")
    
    return false;
   // alert("Not valid Zipcode")
  }
  
  // if{searchParameter === }
  //TODO: Ensure the below code dynamically creates what we want
  $(".beer-search-container").css({ display: "block" })
  $(".beer-buddy-title").css({ display: "none" })
  $("#beer-search").css({ display: "none" })
  $("#primary-search").css({ display: "none" })
  $(".search-option ").css({ display: "block" })
  $(".nav-bar2-container").css({ display: "block" })
  $(".link-container").css({ display: "none" })
  $(".search-option ").css({ bottom: "17px" })
  $("#buddy").css({ position: "relative" })
  $("#buddy").css({ bottom: "13px" })
  $("#map").css({ display: "block" })
  $(".zip").css({ display: "none" })
  $(".dropdown").css({ display: "none" })
  //createContainer()
 //theTridentOfPoseidon()
 pageTwo()
})


 function pageTwo() {




//   //TODO: ENsure this creates 10 cards as per For loop callback
//   //TODO: Only one link to var website

  $(".beer-search-container").html($("<div>", { class: "result" }))
  $(".result").html($("<img>", { class: "beer-image" }))
  $(".beer-image").after($("<div>", { class: "beer-name" }))
  //anchor tags are missing links


  var link = $("<a>");
  link.attr("href", "#beer");
  link.text(beerName);
  link.addClass("beer-link");



  $(".beer-name").html(link);
  $(".beer-link").after($("<ul>", { class: "list" }))



  var li = $("<li>");
  li.addClass("list-one");
  li.text(breweryName)
  $(".list").html(li)

  var li2 = $("<li>");
  li2.text("ABV: " + abv)
  li2.addClass("list-two");
  $(".list-one").after(li2)

  var li3 = $("<li>");
  li3.text(ibu)
  li3.addClass("list-three");
  $(".list-two").after(li3)

  var li4 = $("<li>");
  li4.text(style)
  li4.addClass("list-four");
  $(".list-three").after(li4)

  var li5 = $("<li>");
  li5.text(breweryAddress)
  li5.addClass("list-five");
  $(".list-four").after(li5)

  var li6 = $("<li>");
  li6.text(breweryRegion)
  li6.addClass("list-six");
  $(".list-five").after(li6)

  var link2 = $("<a>");
  link2.attr("href", website);
  link2.text(website);

  $(".list-three").html(link2);
}

function pageTwoLocation() {
  //TODO: ENsure this creates 10 cards as per For loop callback
  //TODO: Only one link to var website

  var newBeerDiv = $("<div>", { class: "result" })
  $(".result").html($("<img>", { class: "beer-image" }))
  $(".beer-image").after($("<div>", { class: "beer-name" }))
  //anchor tags are missing links


  var link = $("<a>");
  link.attr("href", "#beer");
  link.text(beerName);
  link.addClass("beer-link");



  $(".beer-name").html(link);
  $(".beer-link").after($("<ul>", { class: "list" }))



  var li = $("<li>");
  li.text(breweryName)
  li.addClass("list-one");
  $(".list").html(li)

  var li2 = $("<li>");
  li2.text(breweryAddress)
  li2.addClass("list-two");
  $(".list-one").after(li2)

  var li3 = $("<li>");
  li3.text(breweryRegion)
  li3.addClass("list-three");
  $(".list-two").after(li3)

  var link2 = $("<a>");
  link2.attr("href", website);
  link2.text(website);

  $(".list-three").html(link2);

  $(".beer-search-container").append(newBeerDiv);
}