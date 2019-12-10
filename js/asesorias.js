AOS.init({duration: 2000});


 function carousel(n){
    const slide = document.getElementsByClassName("testimony1");
    const dots = document.getElementsByClassName("dots");
    
    for(let i=0; i < dots.length; i++){
        slide[i].classList.remove("slide-active")
        dots[i].classList.remove("active"); 
    }

    slide[n].classList.add("slide-active"); 
    dots[n].classList.add("active"); 
}



    const burguer = document.querySelector(".icon"); 
    const menu = document.querySelector(".menu");

    const menuId = document.getElementById("menu"); 
    burguer.addEventListener('click', () => {
        menu.classList.toggle('menu-active'); 
        
    }
    )
      
