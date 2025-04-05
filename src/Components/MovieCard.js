import React, { useRef } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./MovieCard.css";

const images = [
    { image: "music-shows.avif" },
    { image: "comedy-shows.avif" },
    { image: "amusement-parks.avif" },
    { image: "theatre-shows.avif" },
    { image: "kids-banner.avif" },
    { image: "adventure-fun.avif" },
    { image: "arts-crafts.avif" },
    { image: "workshop.avif" },
    { image: "games.avif" },
    { image: "upskill.avif" },
    { image: "food.avif" }
];

const MovieCard = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -1230, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 1230, behavior: "smooth" });
    };

    return (
        <div className="mc-wrapper">
            <h1 className="fw-bold mc-heading">The Best Of Live Events</h1>

            <div className="mc-container">
                <Button variant="dark" className="mc-scroll-btn mc-left-btn" onClick={scrollLeft}>
                    <BsChevronLeft size={24} />
                </Button>

                <div className="mc-list" ref={scrollRef}>
                    {images.map((item, index) => (
                        <Card key={index} className="mc-card">
                            <Card.Img src={item.image} alt={`Event ${index}`} className="mc-img" />
                        </Card>
                    ))}
                </div>

                <Button variant="dark" className="mc-scroll-btn mc-right-btn" onClick={scrollRight}>
                    <BsChevronRight size={24} />
                </Button>
            </div>
        </div>
    );
};

export default MovieCard;
