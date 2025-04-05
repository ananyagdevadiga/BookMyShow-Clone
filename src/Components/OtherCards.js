import React, { useRef } from "react";
import "./OtherCards.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const scrollCards = (ref, direction) => {
  const container = ref.current;
  const cardWidth = 240;
  const scrollAmount = cardWidth * 5;
  if (direction === "left") {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
};

const OtherCards = () => {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const sections = [
    {
      title: "Your Music Studio",
      cards: [
        {
          date: "Sat, 5 Apr",
          title: "Boyce Avenue India Tour - Bengaluru",
          venue: "Phoenix Marketcity, Whitefield: Bengaluru",
          category: "Concerts",
          image: "music-studio-6.avif",
        },
        {
          date: "Sat, 17 May",
          title: "VIJAY PRAKASH LIVE IN CONCERT",
          venue: "Orian Mall Rajajinagar",
          category: "Concerts",
          image: "music-studio-7.avif",
        },
        {
          date: "Sat, 10 May",
          title: "Papon Live @ AAB Spring Fest - 2025",
          venue: "Phoenix Marketcity, Whitefield: Bengaluru",
          category: "Concerts",
          image: "music-studio-8.avif",
        },
        {
          date: "Sat, 24 May",
          title: "K S Chithra Live In Concert Bangaluru",
          venue: "Phoenix Marketcity, Whitefield: Bengaluru",
          category: "Concerts",
          image: "music-studio-9.avif",
        },
        {
          date: "Sat, 5 Apr",
          title: "Sanam Live Concert In Bengaluru",
          venue: "Phoenix Marketcity, Whitefield: Bengaluru",
          category: "Concerts",
          image: "music-studio-10.avif",
        },
      ],
    },
    {
      title: "Laughter Therapy",
      cards: [
        {
          date: "Sun, 14 Apr",
          title: "Super Mayan",
          venue: "The Underground Comedy",
          category: "Club - Bengaluru",
          image: "LT-img1.avif",
        },
        {
          date: "Sat, 20 Apr",
          title: "High Risks Low Return ft. Sonu Venugoal",
          venue: "Good Shepherd Auditorium:",
          category: "Bengaluru",
          image: "LT-img2.avif",
        },
        {
          date: "Fri, 26 Apr",
          title: "Late Night Sexy Jokes - Best Of Begalore.",
          venue: "The Underground Comedy",
          category: "Club: Bengaluru",
          image: "LT-img3.avif",
        },
        {
          date: "Thu, 2 May",
          title: "Harsh Gujral LIVE",
          venue: "Fan Park, Phoenix Mall Of Asia:",
          category: "Bengaluru",
          image: "LT-img4.avif",
        },
        {
          date: "Mon, 6 May",
          title: "Kal Ki Chinta Nahi Karta ft. Ravi Gupta",
          venue: "Lulu Mall:",
          category: "Bengaluru",
          image: "LT-img5.avif",
        },
      ],
    },
    {
      title: "Top Games & Sports Events",
      cards: [
        {
          date: "Sat, 6 Apr",
          title: "Red Bull Moto Jam 2025",
          venue: "Island Grounds: Chennai",
          category: "Sports",
          image: "sports-1.avif",
        },
        {
          date: "Sun, 7 Apr",
          title: "Bangalore 10K Run",
          venue: "Sri Kanteerava Outdoor",
          category: "Stadium: Bengaluru",
          image: "sports-2.avif",
        },
        {
          date: "Wed, 10 Apr",
          title: "Mumbai Indians vs Delhi Capitals",
          venue: "Wankhede Stadium:Mumbai",
        //   category: "",
          image: "sports-3.avif",
        },
        {
          date: "Sat, 13 Apr",
          title: "Rajasthan Royals vs Gujarat Titans",
          venue: "Sawai Mansingh Stadium: Jaipur",
        //   category: "Nightlife",
          image: "sports-4.avif",
        },
        {
          date: "Fri, 19 Apr",
          title: "Under 17 Chess Camp",
          venue: "Your Place & Your Time:",
          category: "India",
          image: "sports-5.avif",
        },
      ],
    },
    {
      title: "Explore Fun Activities",
      cards: [
        {
          date: "Sun, 6 April onwards",
          title: "Wonderla Amusement Park Bangalore",
          venue: "Wonderla Amusement Park:",
          category: "Bengaluru",
          image: "fun-img1.avif",
        },
        {
          date: "Sat, 13 Apr",
          title: "Foam Ibiza Themed & Luxury Pool Part",
          venue: "Vivanta By Taj, Whitefield:",
          category: "Bengaluru",
          image: "fun-img2.avif",
        },
        {
          date: "Mon, 15 Apr",
          title: "Jollywood Studios and Adventure",
          venue: "Jollywood Studios and",
          category: "Adventure:Bidadi",
          image: "fun-img3.avif",
        },
        {
          date: "Thu, 18 Apr",
          title: "Skhandagiri Sunrise Trek by Tripbae",
          venue: "Meeting point Gopalan Arcade:",
          category: "Bengaluru",
          image: "fun-img4.avif",
        },
        {
          date: "Sat, 20 Apr",
          title: "Parsec-Jayanagar By Param",
          venue: "Parsec-Jayanagar:Bengaluru",
          category: "Bengaluru",
          image: "fun-img5.avif",
        },
      ],
    },
  ];

  return (
    <>
      {sections.map((section, i) => (
        <div className="oc-wrapper" key={i}>
          <div className="oc-header">
            <h2>{section.title}</h2>
            <a href="/">See All ›</a>
          </div>
          <div className="oc-scroll-container">
            <button className="oc-scroll-btn left" onClick={() => scrollCards(refs[i], "left")}>
              <ChevronLeft />
            </button>
            <div className="oc-cards" ref={refs[i]}>
              {section.cards.map((card, index) => (
                <div className="oc-card" key={index}>
                  <div className="oc-image-container">
                    <img src={card.image} alt={card.title} />
                    <div className="oc-date">{card.date}</div>
                  </div>
                  <div className="oc-info">
                    <h3>{card.title}</h3>
                    <p>{card.venue}</p>
                    <p>{card.category}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="oc-scroll-btn right" onClick={() => scrollCards(refs[i], "right")}>
              <ChevronRight />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OtherCards;
