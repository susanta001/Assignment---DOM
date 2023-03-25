const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetbutton = document.getElementById("reset-button");

const txtBox = document.getElementById("total-count");
var count = 0;
txtBox.value= count;
let incrementhandel =  () => {
    count++;
    txtBox.value = count;
};
let decrementhandel =  () => {
    count--;
    txtBox.value = count;
};
let resettotal =  () => {
    count = 0;
    txtBox.value = count;
};
incrementButton.addEventListener("click", incrementhandel);
decrementButton.addEventListener("click", decrementhandel);
resetbutton.addEventListener("click", resettotal);


