let a;
let b;
let c;

// a = window.prompt("nhap canh A");
// a = Number(a);
// b = window.prompt("nhap canh B");
// b = Number(b);


// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("canh C la : ",c);

document.getElementById("submit").onclick = function(){

    a = document.getElementById("aTextbox").value;
    // a = window.prompt("nhap canh A");
    a = Number(a);

    b = document.getElementById("bTextbox").value;
    // b = window.prompt("nhap canh B");
    b = Number(b);


    
    c = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)))
    // console.log("canh C la : ",c);

    document.getElementById("cLabel").innerHTML = "Canh C: "+ c;
}