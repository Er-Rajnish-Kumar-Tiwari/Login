const un = document.querySelector("#n102");  
const pas = document.querySelector("#n104"); 
const bt = document.querySelector(".btn");
const bd=document.querySelector("body");

bt.addEventListener("click", () => {
    // Check if any field is empty 
    if (!un.value || !pas.value) {
        alert("Please fill in all fields");
    } else {
        // Show success message
        bd.innerText = "Login Successful";
        bd.style.color = "red"; 
        bd.style.fontSize="50px";
    }
});