let brandsShowMoreButton = document.querySelector('.brands__wrapper__button')
let brandWrapper = document.querySelector('.brands__wrapper')

let contentText = document.querySelector('.content__text')
let contentShowMoreButton = document.querySelector('.content__button')

let repairShowMoreButton = document.querySelector(
  '.repair_types__wrapper__button'
)
let repairWrapper = document.querySelector('.repair_types__wrapper')

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

contentShowMoreButton.addEventListener('click', () => {
  contentText.classList.toggle('content__text--show_more')
  if (contentText.classList.contains('content__text--show_more')) {
    contentShowMoreButton.textContent = 'Скрыть'
    contentShowMoreButton.classList.add('content__button--show-less')
  } else {
    contentShowMoreButton.textContent = 'Читать далее'
    contentShowMoreButton.classList.remove('content__button--show-less')
  }
})

repairShowMoreButton.addEventListener('click', () => {
  repairWrapper.classList.toggle('repair_types__wrapper--show_more')
  if (repairWrapper.classList.contains('repair_types__wrapper--show_more')) {
    repairShowMoreButton.textContent = 'Скрыть'
    repairShowMoreButton.classList.add(
      'repair_types__wrapper__button--show-less'
    )
  } else {
    repairShowMoreButton.textContent = 'Показать всё'
    repairShowMoreButton.classList.remove(
      'repair_types__wrapper__button--show-less'
    )
  }
})
