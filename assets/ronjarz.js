var notes = ["a","as","b","c","cs","d","ds","e","fs","g","gs"]

function test(){
	var rand = Math.floor(Math.random()*11)
    $(".note").css("background-color","red")
	return notes[rand]

}

console.log(test())
