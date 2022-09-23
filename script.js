
function darkMode(){

    document.getElementById("body-darkMode").style.backgroundColor = "black"
	document.getElementById("body-darkMode").style.color = "white"
	var input = document.getElementById("dark-mode") 
	input.setAttribute("onclick", "lightMode()")
}

function lightMode(){

	document.getElementById("body-darkMode").style.backgroundColor = "white"
	document.getElementById('body-darkMode').style.color = "Black"
	var input = document.getElementById("dark-mode")
	input.setAttribute("onclick", "darkMode()")
	
}