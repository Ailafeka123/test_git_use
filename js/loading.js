const loading = document.getElementById('loading');
const loading_end = document.getElementById('loading_end');

window.addEventListener('load',function(){
    loading_end.style.transform='scale(15,15) rotate(135deg)';
    console.log('載入完成');
});
loading_end.addEventListener('transitionend',function(){
    loading.style.opacity = 0;
    setTimeout(function(){loading.style.display='none';},500)
})