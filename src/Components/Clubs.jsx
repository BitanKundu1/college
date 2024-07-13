import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import hridmanjhare_logo from '../assets/hridmajhare_logo.jpg';
import photo from '../assets/photo.png';
import litwits from '../assets/litwits.jpg';
import film from '../assets/film.jpg';
import coding from '../assets/coding.jpg';
import Art from '../assets/Art.png';

const ClubCard = ({ logo, name, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate(); // Getting navigate function from useNavigate

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
    navigate(`/${name.toLowerCase()}`); // Navigating to a route based on the club name
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col items-center mb-8 mx-4 md:mx-2 md:w-1/3 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img className="w-20 h-20 mt-4" src={logo} alt={name} />
      <p className="font-bold text-lg mt-2 mb-1">{name}</p>
      {showDetails && <p className="text-indigo-400 text-sm mb-4">{description}</p>}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 focus:outline-none"
        onClick={handleShowDetails} // Using handleShowDetails function
      >
        {showDetails ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

const Clubs = () => {
  const clubs = [
    { logo: hridmanjhare_logo, name: 'HRIDMAJHARE', description: 'TINT Music Club' },
    { logo: photo, name: 'CAMERAWORK', description: 'TINT Photography Club' },
    { logo: litwits, name: 'LITWITS', description: 'TINT Literary Club' },
    { logo: film, name: 'TINTTalkies', description: 'Film & Drama Club' },
    { logo: coding, name: 'COADERS', description: 'TINT Coding Club' },
    { logo: Art, name: 'AESTHETICA', description: 'TINT Art Club' },
  ];

  return (
    <div className="h-auto w-full flex flex-col items-center text-center p-6 md:p-10">
      <p className="text-indigo-800 font-bold text-3xl md:text-4xl mb-4">CLUBS</p>
      <div className="w-20 h-1 bg-yellow-400 rounded-full mb-8"></div>
      <div className="w-full flex flex-wrap justify-center">
        {clubs.map((club, index) => (
          <ClubCard key={index} logo={club.logo} name={club.name} description={club.description} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
