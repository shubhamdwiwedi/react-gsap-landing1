import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Landing = ({ onComplete }) => {

    const counter = useRef();
    const page = useRef();

    useGSAP(() => {

        const obj = { value: 0 };

        const tl = gsap.timeline();

        tl.to(obj, {
            value: 100,
            duration: 1.5,

            onUpdate: () => {
                counter.current.innerText = Math.floor(obj.value);
            },
        })

        .to(counter.current, {
            opacity: 0,
            duration: 0.8,
        })

        .to(page.current, {
            yPercent: 100,
            duration: 1.7,
            ease: "expo.out",

            // Start Hero animation when Landing starts moving
            onStart: onComplete,
        });

    }, { scope: page });

    return (
        <div
            ref={page}
            className="absolute left-0 top-0 h-screen w-full bg-black z-20 flex items-end justify-end pr-15"
        >
            <h2
                ref={counter}
                className="text-[16rem] text-white font-extrabold"
            >
                0
            </h2>
        </div>
    );
};

export default Landing;