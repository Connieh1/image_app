import React from "react";

const Card = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="card">
          <a
            href={image.largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.webformatURL}
              alt="photograph"
              className="cardImage"
            />
            <div className="cardInfo">
              <p className="user">Photo by {image.user}</p>
              <p>
                <i className="fas fa-eye"></i>
                <span>Views:</span>
                {image.views}
              </p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
