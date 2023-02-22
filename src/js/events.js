let brandsShowMoreButton = document.querySelector('.brands__wrapper__button')
let brandWrapper = document.querySelector('.brands__wrapper')

let buttonOpenMenu = document.querySelector('.button_open_menu')
let asideMenu = document.querySelector('.aside_menu')
let buttonCloseMenu = document.querySelector('.button-close-aside')
let modalBlur = document.querySelector('.tablet-blur')

let buttonCloseFeedback = document.querySelector('.close_feedback')
let buttonOpenFeedback = document.querySelectorAll('.button_chat')
let feedbackMenu = document.querySelector('.feedback')

let buttonCloseCall = document.querySelector('.close-call')
let buttonOpenCall = document.querySelectorAll('.button_call')
let callMenu = document.querySelector('.call')

brandsShowMoreButton.addEventListener('click', () => {
  brandWrapper.classList.toggle('brands__wrapper--show_more')
  if (brandWrapper.classList.contains('brands__wrapper--show_more')) {
    brandsShowMoreButton.textContent = 'Скрыть'
    brandsShowMoreButton.classList.add('brands__wrapper__button--show-less')
  } else {
    brandsShowMoreButton.textContent = 'Показать всё'
    brandsShowMoreButton.classList.remove('brands__wrapper__button--show-less')
  }
})

buttonOpenMenu.addEventListener('click', () => {
  asideMenu.classList.toggle('aside_menu--show')
  modalBlur.classList.add('tablet-blur--show')
  document.body.style.overflow = 'hidden'
})

buttonCloseMenu.addEventListener('click', () => {
  asideMenu.classList.toggle('aside_menu--show')
  modalBlur.classList.remove('tablet-blur--show')
  document.body.style.overflow = 'auto'
})

buttonOpenFeedback.forEach(function (item) {
  item.addEventListener('click', () => {
    feedbackMenu.classList.toggle('modal--show')
    modalBlur.classList.add('tablet-blur--show')
    document.body.style.overflow = 'hidden'
  })
})

buttonCloseFeedback.addEventListener('click', () => {
  feedbackMenu.classList.toggle('modal--show')
  modalBlur.classList.remove('tablet-blur--show')
  document.body.style.overflow = 'auto'
})

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('tablet-blur')) {
    if (asideMenu.classList.contains('aside_menu--show')) {
      asideMenu.classList.toggle('aside_menu--show')
    }
    if (feedbackMenu.classList.contains('modal--show')) {
      feedbackMenu.classList.toggle('modal--show')
    }
    if (callMenu.classList.contains('modal--show')) {
      callMenu.classList.toggle('modal--show')
    }
    document.body.style.overflow = 'auto'
    modalBlur.classList.remove('tablet-blur--show')
  }
})

buttonOpenCall.forEach(function (item) {
  item.addEventListener('click', () => {
    callMenu.classList.toggle('modal--show')
    modalBlur.classList.add('tablet-blur--show')
    document.body.style.overflow = 'hidden'
  })
})

buttonCloseCall.addEventListener('click', () => {
  callMenu.classList.toggle('modal--show')
  modalBlur.classList.remove('tablet-blur--show')
  document.body.style.overflow = 'auto'
})
