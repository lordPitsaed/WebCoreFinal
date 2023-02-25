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
  let flipper = true
  item.addEventListener('click', () => {
    feedbackMenu.classList.toggle('modal--show')
    modalBlur.classList.add('tablet-blur--show')
    if (flipper) {
      document.body.style.overflow = 'hidden'
      flipper = !flipper
    } else {
      document.body.style.overflow = 'auto'
      flipper = !flipper
    }

    if (window.innerWidth < 1366) {
      asideMenu.classList.remove('aside_menu--show')
    }
  })
})

buttonCloseFeedback.addEventListener('click', () => {
  feedbackMenu.classList.toggle('modal--show')
  modalBlur.classList.remove('tablet-blur--show')
  document.body.style.overflow = 'auto'
})

buttonOpenCall.forEach(function (item) {
  let flipper = true
  item.addEventListener('click', () => {
    callMenu.classList.toggle('modal--show')
    modalBlur.classList.add('tablet-blur--show')
    if (flipper) {
      document.body.style.overflow = 'hidden'
      flipper = !flipper
    } else {
      document.body.style.overflow = 'auto'
      flipper = !flipper
    }

    if (window.innerWidth < 1366) {
      asideMenu.classList.remove('aside_menu--show')
    }
  })
})

buttonCloseCall.addEventListener('click', () => {
  callMenu.classList.toggle('modal--show')
  modalBlur.classList.remove('tablet-blur--show')
  document.body.style.overflow = 'auto'
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
