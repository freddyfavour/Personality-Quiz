export default async function fetchArtwork(searchKeyword) {
  const baseUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
  const objectUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  try {
    const response = await fetch(`${baseUrl}${searchKeyword}`);
    const data = await response.json();

    if (!data.objectIDs || data.objectIDs.length === 0) {
      throw new Error("No artworks found for the search keyword.");
    }

    const randomIndex = Math.floor(Math.random() * Math.min(5, data.objectIDs.length));
    const objectID = data.objectIDs[randomIndex];

    const objectResponse = await fetch(`${objectUrl}${objectID}`);
    const objectData = await objectResponse.json();

    return objectData;
  } catch (error) {
    console.error("Error fetching artwork data:", error);
    return null;
  }
}
