var home_dropdown = document.getElementById("home_drop")

home_dropdown.addEventListener("change", function() {
    if (home_drop.value == "notes")
        open("notes.html", "_self")
})

var home_dropdown = document.getElementById("home_drop")

home_dropdown.addEventListener("change", function(){
    if (home_dropdown.value == "quiz")
        open("quiz.html", "_self")
})
