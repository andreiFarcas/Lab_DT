document.getElementById("result").innerHTML = "Nothing to show yet...";

document.getElementById("plus").addEventListener("click", addNumbers);
document.getElementById("minus").addEventListener("click", substractNumbers);

function printResult(value){
    document.getElementById("result").innerHTML = value;
}

function addNumbers(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    
    var result = n1 + n2;
    console.log(n1, "+", n2);
    printResult(result);
}

function substractNumbers(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    
    var result = n1 - n2;
    console.log(n1, "-", n2);
    printResult(result);
}