$(document).ready(function(){
  // function callBeer() {
  
  //   var queryURL =  "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search";
  
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
  
  // $.ajax({
  // url: queryURL,
  // method: "GET",
  // data: {
  //   q: "American IPA",
  //   withBreweries: "Y",
  //   withLocations: "Y",
  //   key: config
  // } 
  // }).then(function (response) {
  // console.log(response)
  
  // });
  
  // };
  
  // callBeer();
  
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
   $(".search-option ").css({top:"-165px"})
   $("#buddy").css({position:"relative"})
   $("#buddy").css({top:"-30px"})
   $("#map").css({display:"block"})
   $(".zip").css({display:"none"})
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


