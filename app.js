
function applyNow() {
    let firstName = prompt("Enter your firstName");
    let age= prompt("Enter your age");
    let heading=document.querySelector("h3")

    if (age >=18 ) {
        heading.innerHTML=("Congratulations " +' ' + firstName + ' '+"!  Welcome to free yoga classes.");
    } else {
        if( age < 18) {
        heading.innerHTML=("Sorry" + ' '+ firstName + ' ' + "you can't join yoga classes");
    }}
}
let applyButton=document.querySelector("button");
applyButton.addEventListener("click", applyNow);
