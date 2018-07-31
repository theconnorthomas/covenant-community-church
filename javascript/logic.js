var modal = document.getElementById("simpleModal");

var modalBtn = document.getElementById("modalBtn");

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
})

$(".toggle").click(function(){
    $(".navBlock").toggleClass("active");
})

modalBtn.addEventListener("click", openModal);

function openModal(){
    modal.style.display = "block"
};

window.addEventListener("click", closeModal);

function closeModal(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
};

$(".toggle").click(function(){
    $(".toggle").toggleClass("activeMenu");
})