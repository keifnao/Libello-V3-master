const modal = document.getElementById("modal");
const btn = document.getElementById("modalBtn");

const span = document.getElementsByClassName("close")[0];

if (btn === null) {
} else {
    btn.addEventListener("click", () => {
        modal.style.display = "initial";
    })
}

span.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
})
