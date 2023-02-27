let buttonCloseFeedback = document.querySelector('.close_feedback')
let buttonOpenFeedback = document.querySelectorAll('.button_chat')

let buttonCloseCall = document.querySelector('.close-call')
let buttonOpenCall = document.querySelectorAll('.button_call')

let buttonOpenMenu = document.querySelector('.button_open_menu')
let buttonCloseMenu = document.querySelector('.button-close-aside')

let feedbackMenu = document.querySelector('.feedback')
let callMenu = document.querySelector('.call')
let asideMenu = document.querySelector('.aside_menu')

let modalBlur = document.querySelector('.tablet-blur')

buttonOpenFeedback.forEach(function (item) {
  item.addEventListener('click', () => {
    feedbackMenu.classList.toggle('modal--show')
    if (!modalBlur.classList.contains('tablet-blur--show')) {
      modalBlur.classList.add('tablet-blur--show')
    }
    callMenu.classList.remove('modal--show')
    if (window.innerWidth < 1366) {
      asideMenu.classList.remove('aside_menu--show')
    }
  })
})

buttonCloseFeedback.addEventListener('click', () => {
  feedbackMenu.classList.toggle('modal--show')
  modalBlur.classList.remove('tablet-blur--show')
})

buttonOpenCall.forEach(function (item) {
  let flipper = true
  item.addEventListener('click', () => {
    callMenu.classList.toggle('modal--show')
    feedbackMenu.classList.remove('modal--show')
    if (!modalBlur.classList.contains('tablet-blur--show')) {
      modalBlur.classList.add('tablet-blur--show')
    }
    if (window.innerWidth < 1366) {
      asideMenu.classList.remove('aside_menu--show')
    }
  })
})

buttonCloseCall.addEventListener('click', () => {
  callMenu.classList.toggle('modal--show')
  modalBlur.classList.remove('tablet-blur--show')
})

buttonOpenMenu.addEventListener('click', () => {
  asideMenu.classList.toggle('aside_menu--show')
  modalBlur.classList.add('tablet-blur--show')
})

buttonCloseMenu.addEventListener('click', () => {
  asideMenu.classList.toggle('aside_menu--show')
  modalBlur.classList.remove('tablet-blur--show')
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
    modalBlur.classList.remove('tablet-blur--show')
  }
})
