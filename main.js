const show = () => {
    const form = document.querySelector("#signup")
    form.classList.toggle("show")
    document.querySelector(".layer").style.display="block"
   
}

const hide = () => {
    const hide = document.querySelector(".show")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display="none"
}