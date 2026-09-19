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
            opacity:0,
            ease:"power1.in",
        })
        .to(".background",{
            scale:2.4,
            borderBottomLeftRadius:"15%",
            borderBottomRightRadius:"15%",
            bottom:"50px",
            left:'10px',
            ease:"power1.in",
        },'<')
        .to(".names",{
            opacity:1,
            ease:"power1.Out"
        });
    });