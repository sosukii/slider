const images = document.querySelectorAll('.slider-line img')
const dots = document.querySelectorAll('.dots-wrapper div')
const array_dots = Array.from(dots)
const default_activeDot = document.querySelector('.dot-active')
const sliderLine = document.querySelector('.slider-line')
const sliderLine_gap = +(window.getComputedStyle(document.querySelector('.slider-line')).gap.replace('px', ''))

let offset = 0;

document.querySelector('.arrow-to-right').addEventListener('click', () => {
    const slide_width = +(window.getComputedStyle(document.querySelector('.slider-line img')).width.replace('px', ''))
    const active_dot = document.querySelector('.dot-active')
    console.log(active_dot);
    offset = offset + (slide_width+sliderLine_gap)

    sliderLine.style.left = -offset + 'px' 
    if(offset > (slide_width*images.length)/2) {
        sliderLine.style.left = 0
        offset = 0
        default_activeDot.classList.add('dot-active')
    }

    const active_dot_index = array_dots.indexOf(active_dot) //3

    active_dot.classList.remove('dot-active')
    const nextDot = array_dots[active_dot_index+1]
    nextDot.classList.add('dot-active')

})
document.querySelector('.arrow-to-left').addEventListener('click', () => {
    const slide_width = +(window.getComputedStyle(document.querySelector('.slider-line img')).width.replace('px', ''))
    const active_dot = document.querySelector('.dot-active')
    offset = offset - (slide_width+sliderLine_gap)

    if(-offset > (slide_width*images.length)/2 ){
        sliderLine.style.left = 0
        offset = 0
        default_activeDot.classList.add('dot-active')
    }
    sliderLine.style.left = -offset + 'px'

    const active_dot_index = array_dots.indexOf(active_dot)
    active_dot.classList.remove('dot-active')
    const nextDot = array_dots[active_dot_index-1]
    nextDot.classList.add('dot-active')
})