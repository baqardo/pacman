$(".play-button-js").click(function () {
    $(".menu__item").slideUp("slow", function () {
        $(".maps").slideDown("slow", function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#maps").offset().top
            }, 500);

        })
    });
});

// let play_buttons = document.querySelector(".play-button-js");

// play_buttons.addEventListener("click", function () {
//     let menu__items = document.querySelectorAll(".menu__item");
//     menu__items.forEach(function (item) {
//         item.classList.add("hide");


//     })
//     this.addEventListener("transitionend", function () {
//         //  item.classList.add("no-display");
//         console.log(this);
//     })
//     setTimeout(() => {


//         let menu = document.querySelector(".menu");
//         let maps = document.createElement("div");
//         maps.setAttribute("class", "menu__items maps maps-js");
//         maps.innerHTML = `
//              <div class="maps__items">
//                 <img class="maps__items__photo" src="./Images/slider/classic.png" alt="Classic Map">
//             </div>
//             <div class="maps__items">
//                 <img class="maps__items__photo" src="./Images/slider/classic.png" alt="Classic Map">
//             </div>
//             <div class="maps__items">
//                 <img class="maps__items__photo" src="./Images/slider/classic.png" alt="Classic Map">
//             </div>
//             <div class="maps__items">
//                 <img class="maps__items__photo" src="./Images/slider/classic.png" alt="Classic Map">
//             </div>
//             <div class="maps__items">
//                 <img class="maps__items__photo" src="./Images/slider/classic.png" alt="Classic Map">
//             </div>
//             <div class="maps__items">
//                 <img class="maps__items__photo" src="./Images/slider/classic.png" alt="Classic Map">
//             </div>
//             `
//         menu.appendChild(maps);
//     }, 500);
// })



