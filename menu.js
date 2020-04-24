// $(".play-button-js").click(function () {
//     $(".maps-js").slideDown("slow", function () {
//         $(this).css({
//             height: "100px"
//         });
//     });
// });

let play_buttons = document.querySelectorAll(".play-button-js");
play_buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let maps = document.querySelector(".maps-js");
        if (maps.getAttribute("is_active") === "no") {
            maps.style.height = "300px";
            maps.setAttribute("is_active", "yes");
        }
        else {
            maps.style.height = "0px";
            maps.setAttribute("is_active", "no");
        }
    })
})


