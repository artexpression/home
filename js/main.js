const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));




const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');



images.forEach(image =>{
    image.addEventListener('click', ()=>{
      
      addImage(image.getAttribute('src'),image.getAttribute('alt'))
      
    })
})

const addImage = (srcImage, altImage)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;


}

containerImage.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})
