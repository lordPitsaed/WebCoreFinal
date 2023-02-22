let swiperMainElem = document.querySelector('.brands')
let brandCards = document.querySelectorAll('.brand_card')
let brandWrapper = document.querySelector('.brands__wrapper')
function swiperDisable() {
  // eslint-disable-next-line no-unused-vars, no-undef
  let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  if (window.innerWidth <= 425) {
    swiperMainElem.classList.add('swiper')
    brandCards.forEach((element) => {
      element.classList.add('swiper-slide')
    })
    brandWrapper.classList.add('swiper-wrapper')
  } else {
    swiperMainElem.classList.remove('swiper')
    brandCards.forEach((element) => {
      element.classList.remove('swiper-slide')
    })
    brandWrapper.classList.remove('swiper-wrapper')
  }
}
swiperDisable()

window.addEventListener('resize', () => {
  swiperDisable()
})
