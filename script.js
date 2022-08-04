const container = document.querySelector('.container');
const jumbo = document.querySelector('.container .jumbo');
const thumbs = document.querySelectorAll('.thumb');
container.addEventListener('click',function(e){
    if(e.target.className=='thumb'){
        jumbo.style.backgroundImage = `url(${e.target.src})`;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500);
        thumbs.forEach(function(thumb){
            thumb.className= 'thumb';
        });
        e.target.classList.add('active');
    }
});
const button = document.createElement('button');
button.setAttribute('type','button');
button.appendChild(document.createTextNode('reset'));
container.after(button);
button.style.padding = "10px";
button.style.cursor = "pointer";
button.style.marginBottom = "30px";
button.addEventListener('click',function(){
    jumbo.removeAttribute('style');
    thumbs.forEach(function(thumb){
        thumb.className = 'thumb';
    });
});