gsap.registerPlugin(ScrollTrigger);


gsap.to("#page5",{
    duration:3,
    position:"fixed",
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page5",
        start:"top top",
        end:"0% end",
        markers:true,
       scrub:1,
    //    anticipatePin:1,
       pin:true
    }
})
gsap.to("#page6",{
    duration:3,
    position:"relative",
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page5",
        start:"top top",
        end:"0% end",
        // markers:true,
       scrub:1,
       anticipatePin:1,
       pin:true
    }
})
gsap.to("#page6",{
    duration:3,
    position:"fixed",
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page6",
        start:"top top",
        end:"0% end",
        // markers:true,
       scrub:1,
    //    anticipatePin:1,
       pin:true
    }
})
gsap.to("#page6",{
    duration:3,
    position:"relative",
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page7",
        start:"top top",
        end:"0% end",
        // markers:true,
       scrub:1,
    //    anticipatePin:1,
       pin:true
    }
})
gsap.to("#page5",{
    duration:3,
    position:"relative",
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page5",
        start:"bottom ",
        end:"bottom",
        markers:true,
       scrub:1,
    //    anticipatePin:1,
    //    pin:true
    }
})