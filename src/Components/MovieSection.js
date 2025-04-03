import React, { useRef } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"; // Icons for scroll buttons
import "./MovieSection.css"; // Importing the CSS

const movies = [
    { title: "Sikandar", image: "sikandar.avif", rating: "6.2/10", votes: "10.1K", genre: "Action/Drama" },
    { title: "L2: Empuraan", image: "empuraan.avif", rating: "8.1/10", votes: "74.6K", genre: "Action/Crime/Thriller" },
    { title: "Mad Square", image: "mad_square.avif", rating: "8.5/10", votes: "12.8K", genre: "Comedy/Drama" },
    { title: "Veera Dheera Sooran - Part 2", image: "veera.avif", rating: "8.5/10", votes: "12.7K", genre: "Action/Thriller" },
    { title: "Robinhood", image: "robinhood.avif", rating: "8.5/10", votes: "12.7K", genre: "Action/Crime/Thriller" },
    { title: "Manada Kadalu", image: "manada-kadalu.avif", rating: "8.3/10", votes: "747", genre: "Drama/Romantic" },
    { title: "Chhaava", image: "chhaava.avif", rating: "9.2/10", votes: "334.2K", genre: "Action/Drama/Historical" },
    { title: "The Diplomat", image: "the-diplomat.avif", rating: "8.8/10", votes: "21.6K", genre: "Action/Thriller" },
    { title: "Court: State vs A Nobody", image: "court.avif", rating: "9.5/10", votes: "45.8K", genre: "Drama/Thriller" },
    { title: "Black Bag", image: "black-bag.avif", rating: "7.5/10", votes: "417", genre: "Drama/Thriller" }
];

const MovieSection = () => {
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
                <h1 className="fw-bold">Recommended Movies</h1>
                <a href="#" className="text-danger fw-bold">See All &gt;</a>
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
                                <Card.Img variant="top" src={movie.image} alt={movie.title} className="movie-image" />
                                {/* <div className="rating-box"> */}
                                    {/* <span className="star-icon">★</span> {movie.rating} */}
                                {/* </div> */}
                            </div>
                            <Card.Body className="movie-info">
                                <Card.Title className="movie-title">{movie.title}</Card.Title>
                                <Card.Text className="movie-genre">{movie.genre}</Card.Text>
                            </Card.Body>
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

export default MovieSection;
