var notes = ["a","as","b","c","cs","d","ds","e","fs","g","gs"]

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
	var rand = Math.floor(Math.random()*max)
	selNote= notes[rand]
  console.log(selNote)
	return "#" + selNote
//  	return selNote
// 	if(selNote.match(`[a-z][s]`)){
// 		return selNote[0].toUpperCase() +"#"
// 	}else{
// 		return selNote[0].toUpperCase()
// 	}

}

function randNote(note){
	$(".note").css("background-color","white")
	$(""+note).css("background-color","red")
}

$("document").ready(function(){
    $("#randomize").click(function(){
      randNote(test(notes.length))
    })
  }
)
