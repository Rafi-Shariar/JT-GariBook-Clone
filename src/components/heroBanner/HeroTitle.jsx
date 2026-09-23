import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../../hook/useLanguage";

export default function HeroTitle() {
  const { t, lang } = useLanguage();
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  console.log(t.hero.title);
  

useEffect(() => {
  const titles = t?.hero?.title || [];
  if (!titles.length) return;

  const cursorTl = gsap.to(cursorRef.current, {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power2.inOut",
  });

  const masterTl = gsap.timeline({ repeat: -1 });

  titles.forEach((text) => {
    const textObj = { length: 0 };
    const singleTl = gsap.timeline();

    // Start-e empty text set kore neya
    singleTl.set(textObj, {
      length: 0,
      onComplete: () => {
        if (textRef.current) textRef.current.innerText = "";
      },
    });

    // Typewriting animation (forward only)
    singleTl.to(textObj, {
      length: text.length,
      duration: text.length * 0.08,
      ease: "none",
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.innerText = text.slice(0, Math.round(textObj.length));
        }
      },
    });

    // Full sentence display kore pause thakbe
    singleTl.to({}, { duration: 1.5 });

    masterTl.add(singleTl);
  });

  return () => {
    cursorTl.kill();
    masterTl.kill();
  };
}, [lang, t]);

  return (
  /* ২ লাইনের জন্য ফিক্সড/পর্যাপ্ত মিনিমাম হাইট এবং items-start */
  <div className="min-h-[90px] sm:min-h-[115px] md:min-h-[135px] lg:min-h-[155px] flex items-start">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-[500px]">
      <span ref={textRef}></span>
      <span
        ref={cursorRef}
        className="inline-block ml-1 text-brand-primary font-light"
      >
        |
      </span>
    </h1>
  </div>
);
}