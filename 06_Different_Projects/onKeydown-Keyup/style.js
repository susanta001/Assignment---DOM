let input1 = document.querySelector("#txt1");
let input2 = document.querySelector("#txt2");
// Function For Key Down
input1.addEventListener("keydown", function(){
    alert("You Enter in KeyDown : "+this.value);
});
// Function For Key Up
input2.addEventListener("keyup", function(){
    alert("You Enter in KeyUp : "+this.value);
});