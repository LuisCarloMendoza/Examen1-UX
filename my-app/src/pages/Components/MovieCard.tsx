import React from 'react';

interface movieCardInfo{
    title: string;
    image: string;
    description: string;
}

const MovieCard = ({title,image,description}:movieCardInfo) =>{
    console.log(image);
    return(
        <div className="movie-card-container">
        <div className="movie-card">
            <img src={image} alt={""} />
            <div className="movie-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="movie-actions">
                <button>👍 Like</button>
                <button>💬 Details</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default MovieCard;