function clearBorders() {
    const elements = document.getElementsByClassName("border");
    for (const element of elements) {
        element.classList.remove("border");
    }
}

function setMainImage(id) {
    const mainImage = document.querySelector("#mainImage");
    const imgList = document.querySelector("#imgList" + id);
    const imgListSrc = imgList.getAttribute("src");
    mainImage.setAttribute("src", imgListSrc);
    clearBorders();
    imgList.classList.add("border");
    console.log(print);
}