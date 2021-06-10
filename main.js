'strict'
const section1 = document.querySelector('#contact');
document.querySelector('.btn').addEventListener('click',function(){
    section1.scrollIntoView({behavior:'smooth'});
});

const allContainer = document.querySelectorAll('.container');
const revealContainer = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    entry.target.classList.toggle('section--hidden');

    observer.unobserve(entry.target);
}

const containerObserver = new IntersectionObserver(revealContainer,{
    root: null,
    threshold: 0.25,
})

allContainer.forEach(el => {
    containerObserver.observe(el);
    el.classList.add('section--hidden');
})

