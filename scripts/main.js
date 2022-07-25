var result = document.getElementById("result")

var operate = function(value) {
    result.value += value
} 


var calculate = function(value) {
    result.value = eval(value)
}

