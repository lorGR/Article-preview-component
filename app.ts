const share = document.getElementById('share') as HTMLButtonElement;
const footer = document.querySelector('.card__footer') as HTMLDivElement;

const user = document.querySelector('.card__footer__user') as HTMLDivElement;
const options = document.querySelector('.card__footer__options') as HTMLDivElement;

let shareClicked = false;

share.addEventListener('click', (e) => {
    if(shareClicked === false){
        footer.style.background = `hsl(217, 19%, 35%)`;
        user.classList.toggle('hidden');
        options.classList.toggle('hidden');
        shareClicked = true;
    }else{
        footer.style.background = `white`;
        user.classList.toggle('hidden');
        options.classList.toggle('hidden');
        shareClicked = false;
    }
})