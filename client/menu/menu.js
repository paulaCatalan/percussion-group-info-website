const portfolioButton = document.getElementById('portfolio-h1')

portfolioButton.addEventListener('click', () => {
    console.log('You clicked!')
    redirectToPortfolio()
})

function redirectToPortfolio(){
    location.href ='../portfolio/portfolio.html';
}