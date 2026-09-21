gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap.timeline({
            scrollTrigger: {
                trigger: ".first",
                start: "top top",
                end: "+=450%",
                pin: true,
                scrub: true
            }
        })
        .to(".foreground",{
            scale:3,
            bottom:'0vh',
            opacity:0,
            ease:"power1.in",
        })
        .to(".background",{
            scale:1.9,
            borderBottomLeftRadius:"15%",
            borderBottomRightRadius:"15%",
            ease:"power1.in",
        },'<')
        .to(".names",{
            opacity:1,
            ease:"power1.Out"
        });
    });