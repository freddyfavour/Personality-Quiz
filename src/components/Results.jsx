import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element, artwork, loading }) {
  const { name } = useContext(UserContext);

  return (
    <div>
      {name ? (
        <p>
          <strong>{name}</strong>, your element is: {element}
        </p>
      ) : (
        <p>Your element is: {element}</p>
      )}
      {loading ? (
        <p>Loading a piece of art for you...</p>
      ) : artwork ? (
        <div className="artwork flex flex-col items-center justify-center">
          <h2>{artwork.title}</h2>
          <img src={artwork.primaryImage} alt={artwork.title} />
          <p>{artwork.artistDisplayName}</p>
          <p>{artwork.objectDate}</p>
        </div>
      ) : (
        <p>No artwork found.</p>
      )}
    </div>
  );
}
