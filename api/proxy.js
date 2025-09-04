export default async function handler(req, res) {
  try {
    const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING"; // example API

    const response = await fetch(targetUrl);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
