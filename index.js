const images = document.querySelectorAll('.slider-line img')
const dots = document.querySelectorAll('.dots-wrapper div')
const array_dots = Array.from(dots)
const default_activeDot = document.querySelector('.dot-active')
const sliderLine = document.querySelector('.slider-line')
const sliderLine_gap = +(window.getComputedStyle(document.querySelector('.slider-line')).gap.replace('px', ''))

let offset = 0;

function removeActiveFromDots(){
    array_dots.forEach(dot => dot.classList.remove('dot-active'))
}
function setDefaultDot(){
    default_activeDot.classList.add('dot-active')
}
function setDefaultSlide(){
    sliderLine.style.left = 0
    offset = 0
}
function swapTo(rightORleft){
    const slide_width = +(window.getComputedStyle(document.querySelector('.slider-line img')).width.replace('px', ''))
    const active_dot = document.querySelector('.dot-active')
    
    offset = rightORleft === 'right'
        ? offset + (slide_width+sliderLine_gap)
        : (-offset - (slide_width+sliderLine_gap))
    
    if(offset > (slide_width*images.length)/2) {
        sliderLine.style.left = 0
        offset = 0
        default_activeDot.classList.add('dot-active')
    }
    sliderLine.style.left = -offset + 'px'
    
    const active_dot_index = array_dots.indexOf(active_dot)
    active_dot.classList.remove('dot-active')
    const nextDot_index = rightORleft === 'right'
        ?  active_dot_index+1
        :  active_dot_index-1
    const nextDot = array_dots[nextDot_index]
    if(nextDot) nextDot.classList.add('dot-active')
}

document.querySelector('.arrow-to-right').addEventListener('click', () => {
    swapTo('right')
})
document.querySelector('.arrow-to-left').addEventListener('click', () => {
   swapTo('left')
})
window.addEventListener('resize', () => {
    removeActiveFromDots()
    setDefaultDot()
    setDefaultSlide()
})