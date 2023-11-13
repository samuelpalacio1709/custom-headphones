import gsap from "gsap";


export function AnimateLeftToRigth(element, duration, delay) {
    gsap.from(element, {
        x: -150,
        opacity: 0,
        duration,
        ease: 'power4.out',
        delay
    });
}
