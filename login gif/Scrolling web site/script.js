let text = document.getElementById('text')
let plants = document.getElementById('plants')
let hill1 = document.getElementById('hill1')
let hill2 = document.getElementById('hill2')
let hill5 = document.getElementById('hill5')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px' ;
    hill2.style.top = value * -1 + 'px' ;
    hill5.style.left = value * 1.5 + 'px' ;
    hill4.style.left = value * -1.5 + 'px' ;
    hill1.style.Top = value * 1 + 'px' ;
});

console.log('ola');
