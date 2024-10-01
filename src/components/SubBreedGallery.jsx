import { useState, useEffect } from "react";

const SubBreedGallery = ({ setFavoriteImages }) => {
  // Manage selected sub-breeds and random dog image
  const [selectedSubBreeds, setSelectedSubBreeds] = useState(["subrasse1"]);
  const [image, setImage] = useState("");
  const [isFavorite, setFavorite] = useState(false);

  // Fetch random image from the Dog API
  const handleImageFetch = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setImage(data.message); // Set the fetched image in state
  };

  // Fetch a new image when the component mounts
  useEffect(() => {
    handleImageFetch();
  }, []);

  // Handle sub-breed selection
  const handleCheckboxChange = (subBreed) => {
    setSelectedSubBreeds((prev) => {
      if (prev.includes(subBreed)) {
        // Remove sub-breed if already selected
        return prev.filter((b) => b !== subBreed);
      } else {
        // Add new sub-breed to selected list
        return [...prev, subBreed];
      }
    });
  };

  // Toggle favorite status for the current image
  const toggleFavorite = () => {
    setFavoriteImages(image); // Pass image to parent component
    setFavorite(!isFavorite); // Update favorite status
  };

  return (
    <div className="sub-breed-gallery">
      <div className="checkbox-group">
        <label
          className={`checkbox-label ${
            selectedSubBreeds.includes("subrasse1") ? "bold" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={selectedSubBreeds.includes("subrasse1")}
            onChange={() => handleCheckboxChange("subrasse1")}
          />
          <span className="checkbox-custom"></span>
          Subrasse 1
        </label>
        <label
          className={`checkbox-label ${
            selectedSubBreeds.includes("subrasse2") ? "bold" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={selectedSubBreeds.includes("subrasse2")}
            onChange={() => handleCheckboxChange("subrasse2")}
          />
          <span className="checkbox-custom"></span>
          Subrasse 2
        </label>
        <label
          className={`checkbox-label ${
            selectedSubBreeds.includes("subrasse3") ? "bold" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={selectedSubBreeds.includes("subrasse3")}
            onChange={() => handleCheckboxChange("subrasse3")}
          />
          <span className="checkbox-custom"></span>
          Subrasse 3
        </label>
      </div>

      <div className="image-container">
        <img src={image} alt="Dog" className="dog-image" />
        <div className="favorite-icon" onClick={toggleFavorite}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavorite ? "rgb(57, 153, 24)" : "rgb(143, 209, 79)"}
            width="24px"
            height="24px"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      <div className="buttons">
        <button onClick={handleImageFetch}>Vorheriges Bild</button>
        <button onClick={handleImageFetch}>Nächstes Bild</button>
      </div>
    </div>
  );
};

export default SubBreedGallery;
