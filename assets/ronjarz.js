var notes = ["a","as","b","c","cs","d","ds","e","f","fs","g","gs"]

var indexNotesPicked= []
var notesPicked = []

function test(max){

    function randNum(max){
      return Math.floor(Math.random()*max)
    }

  var rand = randNum(max)
    // console.log(rand)
    // console.log(notesPicked)
    // console.log($.inArray(rand,notesPicked))
    // if($.inArray(rand,notesPicked) == -1){console.log("unique")}else{console.log("used")}

  indexNotesPicked.push(rand)

	selNote= notes[rand]
  console.log(rand)
  console.log(selNote)
  notesPicked.push(selNote)
  console.log(notes)
  notes.splice(rand,1)
  console.log("remaining")
  console.log(notes)
	return "#" + selNote
//  	return selNote
// 	if(selNote.match(`[a-z][s]`)){
// 		return selNote[0].toUpperCase() +"#"
// 	}else{
// 		return selNote[0].toUpperCase()
// 	}

}

function randNote(note){
	// $(".note").css("background-color","white")
  if( notesPicked.length<=3){
    $(""+note).css("background-color","red")
  }else{
    $(""+note).css("background-color","pink")

  }
}

function clear(){
  $(".note").css("background-color","white")
  notes = ["a","as","b","c","cs","d","ds","e","f","fs","g","gs"]
  notesPicked= []
  indexNotesPicked = []
  $(".newscale").text(notesPicked)

}

$("document").ready(function(){

    $("#randomize").click(function(){
      randNote(test(notes.length))
          console.log("notes selected")
          console.log(notesPicked)

      $(".newscale").text(notesPicked)

    })
    $("#clear").click(function(){
      clear()
    })
  }
)
