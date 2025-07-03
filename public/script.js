const navDropdown = document.getElementById("navDropdown");
const navToggle = document.getElementById("navToggle");
let isDropDown = true;

navToggle.addEventListener("click", () => {

    isDropDown = !isDropDown;

    if (isDropDown) {
        navDropdown.classList.add("hidden");
        navDropdown.classList.remove("flex");
    } else {
        navDropdown.classList.remove("hidden");
        navDropdown.classList.add("flex");
    }
});


