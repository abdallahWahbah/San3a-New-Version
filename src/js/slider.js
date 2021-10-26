const sliderBtnLeft = document.querySelector(".btn__slider--left");
const sliderBtnRight = document.querySelector(".btn__slider--right");

let curPage = 0;
let maxSlides = document.querySelectorAll(".slide").length;

const goToSlide = (slideNum) =>
{
    document.querySelectorAll(".slide").forEach((slide, index) =>
    {
        slide.style.transform= `translateX(${100 * (index - slideNum)}%)`; 
    });
};
const nextSlide = () =>
{
    if(curPage === maxSlides - 1) curPage = 0;
    else curPage++;
    goToSlide(curPage)
}
const prevSlide = () =>
{
    if(curPage === 0) curPage = maxSlides - 1;
    else curPage--;
    goToSlide(curPage);
}

goToSlide(0);

sliderBtnLeft.addEventListener("click", prevSlide);
sliderBtnRight.addEventListener("click", nextSlide);