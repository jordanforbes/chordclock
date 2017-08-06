var notes = ["a","as","b","c","cs","d","ds","e","f","fs","g","gs"]

function random(max){
 return Math.floor(Math.random()*max)+1
}

function test(){
  var notes = ["a","a#","b","c","c#","d","d#","e","f","f#","g","g#"]
  for(i=1;i<=12; i++){
    console.log(notes)
    rand = random(notes.length-1)
    var selNote = notes[rand-1]
    console.log(rand-1)
    console.log(selNote)
    $("#"+i).text(selNote)
    notes.splice(rand-1,1)
    // console.log(notes)

  }
	// $(".note").text(
	// 	notes[random(notes.length)]
	// )
}

$("document").ready(function(){
  $(".note").click(function(){
    $(this).css("background-color","red")
  })
  $("#go").click(function(){
    test()
  })
  $("#pick").click(function(){
    $(".note").css("background-color","white")
    var ranPick= random(12)
    console.log(ranPick)

    var scaleLengths= [2,3,4]
    var scale= scaleLengths[random(3)-1]

    $(".first").text(ranPick)
    $(".last").text(function(){
        if(ranPick + scale>12){
          return ranPick + scale -12
        }else{
          return ranPick + scale
        }
      })
    var noteColor = ["#FFC4C4","#C4FFFB","#C4FFC8"]

    for(i= 0; i<=scale; i++){
      // $("#"+ ranPick ).css("background-color","red")
      var secPick = ranPick +i
      if(secPick > 12){
        var secPick = secPick-12
          $("#"+ secPick).css("background-color",noteColor[scale-2])

        }else{
          $("#"+ secPick).css("background-color",noteColor[scale-2])
        }
      }
  })

})
