gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: 0,
                end: "+=250%",
                pin: true,
                scrub: true
            }
        })
        .to("img",{
            scale:4,
            z:350,
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