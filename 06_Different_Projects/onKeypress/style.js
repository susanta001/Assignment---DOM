let inputtxt = document.querySelector("#txt");

inputtxt.addEventListener("keypress", function(){
    alert("You Enter : "+this.value);
});