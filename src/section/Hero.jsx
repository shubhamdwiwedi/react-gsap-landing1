import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Landing from "./Landing";

const Hero = () => {
    const imag = useRef();
    const text = useRef();
    const heroTl = useRef();

    useGSAP(() => {

        // Initial state of hero elements
        gsap.set(imag.current, {
            scale: 1.8,
        });

        gsap.set(text.current, {
            y: -50,
            opacity: 0,
        });

        // Hero animation
        heroTl.current = gsap.timeline({
            paused: true,
        });

        heroTl.current
            .to(imag.current, {
                scale: 1,
                duration: 1.5,
                ease: "expo.out",
            })
            .to(text.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            });

    }, []);

    // This function is passed to Landing
    const playHero = () => {
        heroTl.current.play();
    };

    return (
        <div className="h-screen w-full bg-black flex items-start justify-center leading-none relative overflow-hidden">

            {/* Landing Animation */}
            <Landing onComplete={playHero} />

            {/* Hero Image */}
            <img
                ref={imag}
                src="https://images.unsplash.com/photo-1677788518833-c078395495d1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-full w-full object-cover"
                alt="The Beast"
            />

            {/* Hero Text */}
            <div className="absolute h-fit w-fit z-10 flex justify-center mt-50 ml-85">
                <h2
                    ref={text}
                    className="text-[8rem] uppercase text-[#9ea8ad] font-semibold"
                >
                    <span>the</span>{" "}
                    <span>beast</span>
                </h2>
            </div>

        </div>
    );
};

export default Hero;