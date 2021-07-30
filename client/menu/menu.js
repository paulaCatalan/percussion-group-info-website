const portfolioButton = document.getElementById('portfolio-h1')
const calendariButton = document.getElementById('calendari-h1')


portfolioButton.addEventListener('click', () => {
    console.log('You clicked!')
    redirectToPortfolio()
})

calendariButton.addEventListener('click', () => {
    console.log('You clicked!')
    redirectToCalendari()
})

function redirectToPortfolio(){
    location.href ='../portfolio/portfolio.html';
}

function redirectToCalendari(){
    location.href ='../calendar/calendar.html';
}