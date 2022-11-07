const slideCount = 5
let sliderId = 0
const slider = document.querySelector('h3 ~ .figures')
setInterval(() => {
    slider.scrollLeft = sliderId * slider.offsetWidth
    if(sliderId === slideCount) {
        sliderId = 0
    }else sliderId++
}, 2000)