const title = document.querySelector('.clickable-image')

title.addEventListener('click', () => {
    redirectToMenu()
})

function redirectToMenu(){
    location.href ='menu.html';
}