let swiperMainElems = document.querySelectorAll('.swiper_mobile')
let brandCards = document.querySelectorAll('.swiper_mobile__card')
let brandWrapper = document.querySelector('.swiper_mobile__wrapper')

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

function swiperDisable() {
  // eslint-disable-next-line no-unused-vars, no-undef
  if (window.innerWidth <= 425) {
    swiperMainElems.forEach(function (item) {
      item.classList.add('swiper')
    })
    brandCards.forEach((element) => {
      element.classList.add('swiper-slide')
    })
    brandWrapper.classList.add('swiper-wrapper')
  } else {
    swiperMainElems.forEach(function (item) {
      item.classList.remove('swiper')
    })
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
