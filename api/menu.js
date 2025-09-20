export default async function handler(req, res) {
  try {
    const { restaurantId, lat, lng } = req.query;

    // Default to Bhopal lat/lng if not passed
    const finalLat = lat || "23.2599333";
    const finalLng = lng || "77.412615";

    if (!restaurantId) {
      return res.status(400).json({ error: "Missing restaurantId query param" });
    }

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${finalLat}&lng=${finalLng}&restaurantId=${restaurantId}&submitAction=ENTER`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari",
        "Referer": "https://www.swiggy.com/",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({
        error: `Swiggy upstream error ${response.status}`,
        body: text.slice(0, 200),
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("API /menu failed:", err);
    return res.status(500).json({ error: err.message || "Failed to fetch menu" });
  }
}
