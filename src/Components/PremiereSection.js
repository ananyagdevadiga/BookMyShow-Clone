import React, { useRef } from "react";
import "./PremiereSection.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const premieres = [
  {
    title: "Ahaan",
    image: "pri-img-1.avif",
    language: "Hindi",
  },
  {
    title: "Daisy, It's Your Birthday!",
    image: "pri-img-2.avif",
    language: "English",
  },
  {
    title: "Persona Non Grata",
    image: "pri-img-3.avif",
    language: "German",
  },
  {
    title: "The Last Showgirl",
    image: "pri-img-4.avif",
    language: "English",
  },
  {
    title: "A Meek One",
    image: "pri-img-5.avif",
    language: "English",
  },
  {
    title: "The Turn Ahead",
    image: "pri-img-6.avif",
    language: "Hindi",
  },
];

const PremiereSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -1072 : 1072, // 5 cards * (200 width + 18px gap)
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="premiere-wrapper">
      <div className="premiere-header">
        <img src="premiereSection-logo2.jpg" alt="Premiere Logo" className="premiere-logo" />
        <div>
          <h2>PREMIERES</h2>
          <p>Brand new releases every Friday</p>
        </div>
      </div>

      <div className="premiere-scroll-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <BsChevronLeft size={20} />
        </button>

        <div className="premiere-cards" ref={scrollRef}>
          {premieres.map((movie, idx) => (
            <div className="premiere-card" key={idx}>
              <div className="image-wrap">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="info">
                <h4>{movie.title}</h4>
                <p>{movie.language}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <BsChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PremiereSection;
