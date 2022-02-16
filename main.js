const shareButton = document.querySelector('.share')
const shareActiveButton = document.querySelector('.share-active-icon')
const shareBelt = document.querySelector('.share-belt')

window.addEventListener('resize', () => {
    document.location.reload(true)
})

if (window.innerWidth < 768) {
    shareButton.addEventListener('click', () => {
        shareBelt.classList.add('active')
    })
    shareActiveButton.addEventListener('click', () => {
        shareBelt.classList.remove('active')
    })
}

if (window.innerWidth > 768) {
shareButton.addEventListener('click', ()=> {
    shareButton.classList.toggle('active');
}) 

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'click',
        html : true,
        content : '<div class="share-box d-flex"><p class="mb-0 text-uppercase">share</p><a href="https://www.facebook.com/"><img src="images/icon-facebook.svg" alt="facebook-icon"></a><a href="https://twitter.com/"><img src="images/icon-twitter.svg" alt="twitter-icon"></a><a href="https://www.pinterest.com/"><img src="images/icon-pinterest.svg" alt="pinterest-icon"></a></div>'
    });
});
};
