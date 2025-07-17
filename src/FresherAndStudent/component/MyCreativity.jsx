import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import "../../FresherAndStudent/css/component/MyCreativity.css";

const MyCreativity = () => {
    const { about } = useContext(MyContext);
    const [counters, setCounters] = useState({});
    const [counted, setCounted] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("about-section");
            if (!section) return;

            const trigger = window.innerHeight / 1.2;
            const top = section.getBoundingClientRect().top;

            if (top < trigger && !counted) {
                setCounted(true); 

                about.additional.forEach(({ name, count }) => {
                    let current = 0;
                    const interval = setInterval(() => {
                        current++;
                        setCounters(prev => ({ ...prev, [name]: current }));
                        if (current >= count) clearInterval(interval);
                    }, 50);  // speed = smoother & faster count
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
        return () => window.removeEventListener("scroll", handleScroll);
    }, [about, counted]);

    return (
    <div id="about-section" className="about-counts">
    {about.additional.map((item, i) => (
        <div className="count-box" key={i}>
            <div className="count-left">
                <i className={item.icon}></i>
                <h3>{counters[item.name] || 0}+</h3>
            </div>
            <div className="count-bottom">
                <p className="count-title">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                <p className="count-description">{item.description}</p>
            </div>
        </div>
    ))}
</div>



    );
};

export default MyCreativity;
