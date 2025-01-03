import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '550px',
              objectFit: 'cover', 
            }}
          />
        </div>
      </div>

      <style jsx="true">
        {`
          @media (max-width: 768px) {
            .card-img {
              max-height: 300px; // Allow proportional resizing within a limit
              object-fit: contain; // Prevent cropping
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
