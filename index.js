window.addEventListener('scroll', function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icons8-menu-48.svg";
        
        
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icons8-close.svg";
    }
}


