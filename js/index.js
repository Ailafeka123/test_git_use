const project_box = document.querySelectorAll('.project_box');


project_box.forEach( e=>{
    console.log(e);
    const project_text = e.querySelector('.project_text')
    e.addEventListener('mouseenter',function(){
        project_text.classList.add('active');
    })
    e.addEventListener('mouseleave',function(){
        project_text.classList.remove('active');
    })
});
