const FavoritesGallery = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorites-gallery">
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((fav, index) => (
          <div key={index} className="favorite-item">
            <img src={fav} alt={`Favorite ${index}`} />
            <div className="remove-icon" onClick={() => removeFavorite(fav)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(252, 65, 0)"
                width="24px"
                height="24px"
              >
                <path d="M3 6h18v2H3V6zm3 12V10h12v8H6zm4-7v6h2v-6h-2zm4 0v6h2v-6h-2z" />
              </svg>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesGallery;
