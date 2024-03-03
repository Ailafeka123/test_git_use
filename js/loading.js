const loading = document.getElementById('loading');
const loading_end = document.getElementById('loading_end');
const main = document.getElementById('main');

window.addEventListener('load',function(){
    loading_end.style.transform='scale(15,15) rotate(135deg)';

});
loading_end.addEventListener('transitionend',function(){
    loading.style.opacity = 0;
    main.classList.remove('main_hidden');
    setTimeout(function(){loading.style.display='none';},500)
})