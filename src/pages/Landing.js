// src/pages/Landing.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

import Img1 from '../assets/V4.jpg'; // Import de l'image

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <NavBar />
            <div style={landingStyle}>
                <h1>Welcome to the Election Result Dashboard</h1>
                <p>This dashboard provides real-time election results and insights.</p>
                <div className="flex flex-col items-center justify-center gap-10 w-full px-4">
                    {/* Autres éléments */}
                </div>
                <button onClick={handleLoginClick}
                style={{
                    marginTop: "0px", // Équivalent de `mt-0`
                    padding: "0.5rem 1rem", // Équivalent de `px-4 py-2`
                    backgroundColor: "#FFA500", // Couleur de fond initiale
                    color: "white", // Couleur du texte
                    fontWeight: "bold", // Gras
                    fontSize: "1.125rem", // Taille du texte (`text-lg`)
                    borderRadius: "9999px", // Arrondi complet (équivalent de `rounded-full`)
                    border: "2px solid #FFA500", // Bordure orange avec 2px d'épaisseur
                    transition: "all 0.3s ease", // Transition pour les effets (équivalent `transition-transform`)
                    outline: "none", // Supprime le contour par défaut
                    cursor: "pointer"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "transparent"; // Fond transparent au survol
                    e.target.style.color = "black"; // Texte en noir au survol
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#FFA500"; // Restauration de la couleur d'origine
                    e.target.style.color = "white"; // Restauration de la couleur d'origine
                  }}
                  onFocus={(e) => e.target.style.outline = "4px solid #FFA500"} // Contour orange au focus
                  onBlur={(e) => e.target.style.outline = "none"} // Suppression du contour après perte de focus
                >Login</button>
            </div>
        </div>
    );
};

// Style pour inclure une image en arrière-plan
const landingStyle = {
    backgroundImage: `url(${Img1})`, // Utilisation de l'image importée
    backgroundSize: 'cover', // L'image couvre toute la surface
    backgroundPosition: 'center', // L'image est centrée
    backgroundRepeat: 'no-repeat', // Pas de répétition
    height: '95vh', // Hauteur de toute la fenêtre
    width: '100%', // Largeur de tout l'écran
    display: 'flex', // Permet de positionner les éléments à l'intérieur
    flexDirection: 'column', // Les éléments sont empilés verticalement
    alignItems: 'center', // Centre les éléments horizontalement
    justifyContent: 'center', // Centre les éléments verticalement
    color: 'black', // Couleur du texte en blanc pour contraster avec l'image
    textAlign: 'center', // Centrage du texte
};

export default LandingPage;
