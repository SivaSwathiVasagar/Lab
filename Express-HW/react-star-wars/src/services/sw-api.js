//const BASE_URL = "https://swapi.dev/api/";

// Function to make a GET request to SWAPI
async function fetchData(endpoint) {
  try {
    const response = await fetch(`https://swapi.dev/api/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Api call failed`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`API call error: ${error.message}`);
  }
}

// Function to get all starships
export async function getAllStarships() {
  const starshipsData = await fetchData("starships/");
  return starshipsData.results;
}
