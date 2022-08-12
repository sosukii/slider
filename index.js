const images = document.querySelectorAll('.slider-line img')
const slide_width = +(window.getComputedStyle(document.querySelector('.slider-line img')).width.replace('px', ''))
const sliderLine_width = +(window.getComputedStyle(document.querySelector('.slider-line')).width.replace('px', ''))
const sliderLine = document.querySelector('.slider-line')
// const BASE_LEFT = +(window.getComputedStyle(document.querySelector('.slider-line')).left.replace('px', ''))
let sliderLine_style__left =  +(window.getComputedStyle(document.querySelector('.slider-line')).left.replace('px', ''))
const sliderLine_gap = +(window.getComputedStyle(document.querySelector('.slider-line')).gap.replace('px', ''))

let offset = 0;

document.querySelector('.arrow-to-right').addEventListener('click', () => {
    offset = offset + (slide_width+sliderLine_gap)

    // sliderLine_style__left = sliderLine_style__left - (slide_width+sliderLine_gap) 
console.log(offset);
console.log((slide_width*images.length)/2);
    sliderLine.style.left = -offset + 'px' 
    if(offset > (slide_width*images.length)/2) {
        console.log('if worked!');
        sliderLine.style.left = 0
        offset = 0
    }
})
document.querySelector('.arrow-to-left').addEventListener('click', () => {
    offset = offset - (slide_width+sliderLine_gap)
    // sliderLine_style__left = sliderLine_style__left + (slide_width+sliderLine_gap)
    console.log(-offset);
    console.log((slide_width*images.length)/2);
    if(-offset > (slide_width*images.length)/2 ){
        sliderLine.style.left = 0
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})