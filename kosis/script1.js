gsap.registerPlugin(ScrollTrigger);


gsap.to("#box" ,{
    position:"fixed",
    duration:3,
    scrollTrigger:{

        scrub:1,
        trigger: "#box1",
        start: "0%",
        end:"100%",
        markers:true,
        
    }
})
gsap.to( "#box1",{
    position:"fixed",
    duration:3,
    scrollTrigger:{
        scrub:1,
        trigger: "#box3",
        start: "70%",
        end:"170%",
        markers:true,
        
    }

})