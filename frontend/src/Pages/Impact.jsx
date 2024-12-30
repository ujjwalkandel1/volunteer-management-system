import React, { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const impactData = [
    { stat: 500, desc: "Volunteers Engaged" },
    { stat: 1000, desc: "Hours Contributed" },
    { stat: 250, desc: "Events Organized" },
  ];

  const [counts, setCounts] = useState(impactData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has started
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Start animation only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      const intervalIds = impactData.map((data, index) => {
        const increment = Math.ceil(data.stat / 100); // Adjust speed of the increment
        return setInterval(() => {
          setCounts((prev) => {
            const updatedCounts = [...prev];
            if (updatedCounts[index] < data.stat) {
              updatedCounts[index] += increment;
            } else {
              updatedCounts[index] = data.stat; // Stop at the target number
              clearInterval(intervalIds[index]);
            }
            return updatedCounts;
          });
        }, 30); // Animation speed
      });

      return () => {
        intervalIds.forEach(clearInterval); // Clean up intervals
      };
    }
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="text-center mt-8 mx-20 pb-20 bg-white py-8 px-4 rounded-lg shadow-xl border border-gray-300"
    >
      <h3 className="text-xl font-bold text-gray-600">Our Impact</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {impactData.map((impact, index) => (
          <div key={index}>
            <h4 className="text-2xl font-bold text-green-600">{counts[index]}+</h4>
            <p className="text-gray-600">{impact.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
