window.addEventListener("load", function () {
    init();
});
function init() {
    container = document.querySelector(".container");
    container.addEventListener("click", function () {
        if (container.classList.contains("night")) {
            container.classList.remove("night");
            container.classList.add("day");
        } else {
            container.classList.remove("day");
            container.classList.add("night");
        }
    })
};
