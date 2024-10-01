import { useEffect, useState } from "react";

const BreedSelector = ({ setSelectedBreed }) => {
  const [breeds, setBreeds] = useState([]);

  // Fetch available breeds when the component mounts
  useEffect(() => {
    async function fetchBreeds() {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      // Extract breed names and update the state
      setBreeds(Object.keys(data.message));
    }
    fetchBreeds();
  }, []);

  // Handle breed selection from dropdown
  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select className="breed-dropdown" onChange={handleBreedChange}>
        <option value="">Alle Hunderassen</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedSelector;
