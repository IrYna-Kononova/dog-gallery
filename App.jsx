import { useState } from "react";
import BreedSelector from "./src/components/BreedSelector";
import SubBreedGallery from "./src/components/SubBreedGallery";
import FavoritesGallery from "./src/components/FavoritesGallery";
import "./App.css";

const App = () => {
  // State to store the selected breed
  const [selectedBreed, setSelectedBreed] = useState("");

  // State to manage favorite images, initialized from localStorage to persist data across sessions
  const [favoriteImages, setFavoriteImages] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Function to toggle favorite status of an image
  const handleToggleFavorite = (image) => {
    setFavoriteImages((prevFavorites) => {
      let updatedFavorites;
      if (prevFavorites.includes(image)) {
        // Remove image if already favorited
        updatedFavorites = prevFavorites.filter((img) => img !== image);
      } else {
        // Add image to favorites
        updatedFavorites = [...prevFavorites, image];
      }
      // Save updated favorites in localStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div className="container">
      <h1>Auswahl Hunderasse</h1>
      <BreedSelector setSelectedBreed={setSelectedBreed} />{" "}
      <h2>Gallerie Subrassen</h2>
      <SubBreedGallery
        breed={selectedBreed}
        setFavoriteImages={handleToggleFavorite}
      />
      {favoriteImages.length > 0 && (
        <>
          <h2>Gallerie Favoriten</h2>
          <FavoritesGallery
            favorites={favoriteImages}
            removeFavorite={handleToggleFavorite}
          />
        </>
      )}
    </div>
  );
};
export default App;
