let coracao = document.querySelector('#icon-coracao')

coracao.addEventListener('click', function () {
  if (coracao.getAttribute('name') == 'heart-outline') {
    coracao.setAttribute('name', 'heart')
  }
})

coracao.addEventListener('click', function () {
  if (coracao.getAttribute('name') == 'heart') {
    coracao.setAttribute('name', 'heart-outline')
  }
})