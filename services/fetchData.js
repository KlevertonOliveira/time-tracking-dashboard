export async function fetchData() {
  let data = [];
  try {
    const response = await fetch("./assets/data/data.json");
    data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}