gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=350%",
                pin: true,
                scrub: true
            }
        })
        .to("#arch",{
            scale:4,
            transformOrigin:"center center",
            ease:"power1.inOut",
            opacity:0
        })
        .to(".section.hero",{
            scale:2,
            transformOrigin:"center center",
            ease:"power1.inOut",
            opacity:1
        },"<");
});