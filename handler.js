document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userBtn").addEventListener("click", function() {
        var dropdown = document.querySelector(".userDropDown-content");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    });
    document.getElementById("userDropDownOpaque").addEventListener("click", function() {
        var dropdown = document.querySelector(".userDropDown-content");
        dropdown.style.display = "none";
    });
});