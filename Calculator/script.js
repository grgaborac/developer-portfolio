function display(val){

    document.getElementById('result').value += val;
    

}


function solve(){

    let format = /[/*-+%enter]/;

    let x = document.getElementById('result').value
    
    let y = eval(x)

    if (format.test(x)){
        document.getElementById('operands').value = x;
        document.getElementById('result').value = y;
    }
    else{
        document.getElementById('operands').value = "";
        document.getElementById('result').value = y;
    }

    return y;
}

function clearScreen(){

    document.getElementById('result').value = "";

    document.getElementById('operands').value = "";

}



document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        solve();
    }
})

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        clearScreen()
    }
})


window.onload = function() {
    focused();
}


function focused() {
    document.getElementById('result').focus();
}

document.addEventListener("click", function(e) {
    focused();
})

function custom() {
    let input = document.getElementById('result').value

    let index = 0

    let result = "-" + input;
    document.getElementById('result').value = result;
}

document.addEventListener("keydown", function(e) {
    if (e.key === ",") {
        e.preventDefault();
        display(".");
    }
})


result.addEventListener("keydown", function(e) {
    let format = /[A-Za-z]/;

    let string = document.getElementById('result').value;

    if ((e.which > 64 && e.which < 91)){
        e.preventDefault();
        display("");
    }
})