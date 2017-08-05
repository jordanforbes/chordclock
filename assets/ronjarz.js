var notes = ["a","as","b","c","cs","d","ds","e","f","fs","g","gs"]

var notesPicked= []

// function test(){
// 	var rand = Math.floor(Math.random()*11)
// 	selNote= notes[rand]
// // 	return selNote
// 	if(selNote.match(`[a-z][s]`)){
// 		return selNote[0]+"#"
// 	}else{
// 		return selNote
// 	}
// }
//
// console.log(test())


function test(max){

  function randNum(max){

    return Math.floor(Math.random()*max)


  }

  var rand = randNum(max)
    // console.log(rand)
    // console.log(notesPicked)
    // console.log($.inArray(rand,notesPicked))
    // if($.inArray(rand,notesPicked) == -1){console.log("unique")}else{console.log("used")}

  notesPicked.push(rand)

	selNote= notes[rand]
console.log(rand)
  console.log(selNote)
  console.log(notes)
  notes.splice(rand,1)
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
	$(""+note).css("background-color","red")
}

function clear(){
  $(".note").css("background-color","white")
  notes = ["a","as","b","c","cs","d","ds","e","f","fs","g","gs"]
  notesPicked= []
}

$("document").ready(function(){

    $("#randomize").click(function(){
      randNote(test(notes.length))
      console.log(notesPicked)
    })
    $("#clear").click(function(){
      clear()
    })
  }
)
