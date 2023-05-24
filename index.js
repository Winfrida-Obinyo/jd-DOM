document.body.style.backgroundColor="silver";

document.getElementById("title").style.color = "green"

// Change the font case for h3 title tags to
// uppercase
document.getElementById("fruits").style.textTransform = "uppercase"
document.getElementById("vegetables").style.textTransform = "uppercase"


//  Add one more fruit to the fruits list
let li = document.createElement('li');
li.innerHTML= "Dates";
document.getElementById('fruList').appendChild(li); 

// Add one more vegetable to the vegetables
// list
// let li2 = document.createElement('li');
// li2.innerHTML = "Spinach"
// vegList.getElementById('vegList').appendChild('li2')

let greens = document.createElement('li')
greens.innerHTML = 'Spinach'
vegList.appendChild(greens)
