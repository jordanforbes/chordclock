var notes = ["a","as","b","c","cs","d","ds","e","f","fs","g","gs"]

function random(max){
 return Math.floor(Math.random()*max)+1
}

$("document").ready(function(){
  $("#go").click(function(){
    $("#"+random(12)).css("background-color","red")
  })
})
