const body = document.body
let content = document.querySelector('.content-msg')
var res = document.querySelector('.res');
var img = document.getElementById('img');
var d = new Date();
var horas = d.getHours();

if(horas >= 0 && horas <= 4){
    res.innerHTML = ('Boa Madrugada !')
    img.src = './img/madrugada.jpg'
    res.style.color = 'white'
    body.style.backgroundColor = '#020413'
    content.style.backgroundColor = '#0a2761'

   
}
else if(horas >= 5 && horas <= 12){
    res.innerHTML = ('Bom Dia !')
    img.src = './img/manha.jpg'
    body.style.backgroundColor = '#3ca0da'
    content.style.backgroundColor = '#c8e3f3'
}
else if (horas >= 13 && horas <= 18){
    res.innerHTML = ('Boa Tarde !')
    img.src = './img/tarde.jpg'
    body.style.backgroundColor = '#e59d64'
}
else {
    res.innerHTML = ('Boa Noite !')
    img.src = './img/noite.jpg';
    res.style.color = 'white'
    body.style.backgroundColor = '#040508'
    content.style.backgroundColor = '#1e2d3c'
    
}

