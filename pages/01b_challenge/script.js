import gsap from 'gsap'

gsap.to(".card",{
    // x:200,
    // opacity:1,
    rotate:360,
    background:"#ff6500",
    borderRadius:"0",
    scale:1.25,
    duration:2,
    yoyo:true,
    repeat:-1,
    ease:"bounce"
})