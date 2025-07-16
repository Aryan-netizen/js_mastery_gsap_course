import gsap from "gsap"

const button = document.querySelector('.scroll-to-top')
let isfloating= false

window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        button.classList.add("show")
        if(!isfloating){
        gsap.to(button,{
            y:-10,
            duration:1.5,
            repeat:-1,
            yoyo:true,
            ease:"sine.out"
        })
        isfloating=true
    }
    }else{
        button.classList.remove('show')
    }
    
})

button.addEventListener("mouseenter",()=>{
    gsap.to(button,{
        scale:1.5,
        rotate:360,
        duration:0.5
    })
})
button.addEventListener("mouseleave",()=>{
    gsap.to(button,{
        scale:1,
        rotate:-360,
        duration:0.5
    })
})
button.addEventListener("click",()=>{
    window.scrollTo(0,0);
})