gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap.timeline({
            scrollTrigger: {
<<<<<<< HEAD
                trigger: ".first",
                start: "top top",
                end: "+=450%",
=======
                trigger: ".wrapper",
                start: 0,
                end: "+=250%",
>>>>>>> parent of eda4345 (Changed structure)
                pin: true,
                scrub: true
            }
        })
<<<<<<< HEAD
        .to(".foreground",{
            scale:3,
            opacity:0,
            ease:"power1.in",
=======
        .to("img",{
            scale:4,
            z:350,
            transformOrigin:"center center",
            ease:"power1.inOut",
            opacity:0
>>>>>>> parent of eda4345 (Changed structure)
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