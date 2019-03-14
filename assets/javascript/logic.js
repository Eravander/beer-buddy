<<<<<<< HEAD
$(document).ready(function(){

  
  // Initialize and add the map
   function initMap() {
  // //   // The location of charlotte
   var charlotte = {lat: 35.227085, lng: -80.843124};
  //  // The map, centered at charlotte
   var map = new google.maps.Map(
   document.getElementById('map'), {zoom: 10, center: charlotte});
  //  // The marker, positioned at charlotte
   var marker = new google.maps.Marker({position: charlotte, map: map});
  }
  initMap()

  var beer = "Ale"
var brewery = "Brewery"
var directions = "directions"
  
  $("#primary-search").click(function(){
    event.preventDefault()
  //  alert("hi")
  //   $(".beer-buddy-title").fadeOut(7000)
  //   $(".beer-search-container").fadeIn(10000)
    //$(".beer-search-container").css({display: "block" })
   $(".beer-search-container").css({display:"block"})
   $(".beer-buddy-title").css({display:"none"})
   $("#beer-search").css({display:"none"})
   $("#primary-search").css({display:"none"})
   $(".search-option ").css({display:"block"})
   $(".nav-bar2-container").css({display:"block"})
   $(".link-container").css({display:"none"})
   $(".search-option ").css({top:"-20px"})
   $("#buddy").css({position:"relative"})
   $("#buddy").css({top:"-14px"})
   $("#map").css({display:"block"})
   $(".zip").css({display:"none"})
   $(".dropdown").css({display:"none"})
// turn this into a function  out side of the scope the  click then place the function in click

    pageTwo()
  })



  function pageTwo(){


    $(".beer-search-container").html($("<div>", {class:"result" }))
    $(".result").html($("<img>", {class:"beer-image" }))
    $(".beer-image").after($("<div>", {class:"beer-name" }))
    //anchor tags are missing links
    
  
    var link = $("<a>");
    link.attr("href", "#beer");
    link.text(beer);
    link.addClass("beer-link");

    
  
    $(".beer-name").html(link);
   // $(".beer-name").html($("<a>", {class:"beer-link" }))
   // the ol elements need to be AFTER to the div then the first li need to be inside but the following need to be after()
   $(".beer-link").after($("<ul>", {class:"list" }))
  
  
   
   var li = $("<li>");
    li.text(brewery)
    li.addClass("list-one");
    $(".list").html(li)

  var  li2 = $("<li>");
    li2.text(brewery)
    li2.addClass("list-two");
    $(".list-one").after(li2)

    var  li3 = $("<li>");
    li3.text(brewery)
    li3.addClass("list-three");
    $(".list-two").after(li3)
   //$(".list").html($("<li>", {class:"list-catorgorey" }))
   //$(".list-catorgorey").html({text:brewery })
   
  
   //$(".list-catorgorey").after($("<li>",{text:brewery }))
   //$(".list-catorgorey").after($("<li>",{text:brewery }))
   //$(".list-catorgorey").after($("<li>",{class:"beer-link2" }))
  
   
  
   var link2 = $("<a>");
    link2.attr("href", directions);
    link2.text(directions);
    //link2.addClass("beer-link2");
  
    $(".list-three").html(link2);
   // li below doesn't work correctly anchor is placed inside but cannot add attribute
   //$(".list-catorgorey").after($("<li>"+ "<a>", {href:"list-catorgorey" } + "</a>" + "</li>"))
   
    
  
  
  
  
   // works but li elements are empty $(".list").append($("<li>" + "name")).append("<li>").append("<li>" ).append("<li>")
    
  
  }
})

=======
//TODO: reconcile variable names for functions and displays
//TODO: Link variable information
>>>>>>> 7092226496dd7b08d18204b9fa5a095e7f29289e

// variable names
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


    for (var i = 0; i < 10; i++) {
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
      //TODO: Dynamically create display card 
      pageTwo();
    }

  });

};

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

var beer = "Ale"
var brewery = "Brewery"
var directions = "directions"

$("#primary-search").click(function () {
  event.preventDefault()
  //TODO: Input verification
  //TODO: create attribute or value to differentiate between zip code entry and beer entry

  if (createdAttribute === "beer") {
    callBeer();
  } else if (createdAttribute === "zip") {
    callLocation();
  }

  //TODO: Ensure the below code dynamically creates what we want
  $(".beer-search-container").css({ display: "block" })
  $(".beer-buddy-title").css({ display: "none" })
  $("#beer-search").css({ display: "none" })
  $("#primary-search").css({ display: "none" })
  $(".search-option ").css({ display: "block" })
  $(".nav-bar2-container").css({ display: "block" })
  $(".link-container").css({ display: "none" })
  $(".search-option ").css({ top: "-165px" })
  $("#buddy").css({ position: "relative" })
  $("#buddy").css({ top: "-30px" })
  $("#map").css({ display: "block" })
  $(".zip").css({ display: "none" })
})



function pageTwo() {
  //TODO: ENsure this creates 10 cards as per For loop callback
  //TODO: Only one link to var website

  $(".beer-search-container").html($("<div>", { class: "result" }))
  $(".result").html($("<img>", { class: "beer-image" }))
  $(".beer-image").after($("<div>", { class: "beer-name" }))
  //anchor tags are missing links


  var link = $("<a>");
  link.attr("href", "#beer");
  link.text(beer);
  link.addClass("beer-link");



  $(".beer-name").html(link);
  $(".beer-link").after($("<ul>", { class: "list" }))



  var li = $("<li>");
  li.text(brewery)
  li.addClass("list-one");
  $(".list").html(li)

  var li2 = $("<li>");
  li2.text(brewery)
  li2.addClass("list-two");
  $(".list-one").after(li2)

  var li3 = $("<li>");
  li3.text(brewery)
  li3.addClass("list-three");
  $(".list-two").after(li3)

  var link2 = $("<a>");
  link2.attr("href", directions);
  link2.text(directions);

  $(".list-three").html(link2);
}


//TODO: Create on click event for user to get random beer
//Submit button "on click" callRandom();