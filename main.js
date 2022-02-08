const shareButton = document.querySelector('.share')
const shareActiveButton = document.querySelector('.share-active-icon')
const shareBelt = document.querySelector('.share-belt')

shareButton.addEventListener('click', () => {
    shareBelt.classList.toggle('active')
})

shareActiveButton.addEventListener('click', () => {
    shareBelt.classList.toggle('active')
})