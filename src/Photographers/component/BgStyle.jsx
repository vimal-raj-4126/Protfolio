import { useEffect, useRef, useState } from 'react';
import '../../Photographers/css/component/BgStyle.css';
import bg from '../assets/bg.jpg'; // Only for URL

const BgStyle = () => {
  const text = "Canon";
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setInView(entry.isIntersecting),
    { threshold: 0.5 }
  );

  const currentRef = sectionRef.current;

  if (currentRef) observer.observe(currentRef);
  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);


  return (
    <div
      className="snap-slide bg-section"
      ref={sectionRef}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-container">
        {text.split('').map((letter, i) => (
          <span
            key={i}
            className={`letter ${inView ? 'animate' : ''} ${
              i >= text.length - 3 ? 'border-bottom' : ''
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BgStyle;
