import React, { useRef } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"; // Icons for scroll buttons
import "./MovieCard.css"; // Importing the CSS

const movies = [
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
    { image: "food.avif" },
];

const MovieCard = () => {
    const scrollRef = useRef(null);

    // Scroll Left (Backward)
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    // Scroll Right (Forward)
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <Container className="mt-4">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="fw-bold" style={{ fontSize: "25px" }}>The Best Of Live Events</h1>
            </div>

            {/* Movie Scrolling Container */}
            <div className="movie-container">
                {/* Backward Scroll Button */}
                <Button variant="dark" className="scroll-btn left-btn" onClick={scrollLeft}>
                    <BsChevronLeft size={24} />
                </Button>

                {/* Movie List */}
                <div className="movie-list" ref={scrollRef}>
                    {movies.map((movie, index) => (
                        <Card key={index} className="movie-card">
                            <div className="movie-img-container">
                                {/* ✅ Removed variant="top" to ensure no extra Bootstrap elements */}
                                <Card.Img src={movie.image} alt={`Movie ${index}`} className="movie-image" />
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Forward Scroll Button */}
                <Button variant="dark" className="scroll-btn right-btn" onClick={scrollRight}>
                    <BsChevronRight size={24} />
                </Button>
            </div>
        </Container>
    );
};

export default MovieCard;