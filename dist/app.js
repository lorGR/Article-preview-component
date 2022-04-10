var share = document.getElementById('share');
var footer = document.querySelector('.card__footer');
var user = document.querySelector('.card__footer__user');
var options = document.querySelector('.card__footer__options');
var shareClicked = false;
share.addEventListener('click', function (e) {
    if (shareClicked === false) {
        footer.style.background = "hsl(217, 19%, 35%)";
        user.classList.toggle('hidden');
        options.classList.toggle('hidden');
        shareClicked = true;
    }
    else {
        footer.style.background = "white";
        user.classList.toggle('hidden');
        options.classList.toggle('hidden');
        shareClicked = false;
    }
});
