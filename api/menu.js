export default async function handler(req, res) {
  try {
    const { restaurantId, lat, lng } = req.query;

    if (!restaurantId || !lat || !lng) {
      return res.status(400).json({ error: "Missing required query params" });
    }

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari",
        "Referer": "https://www.swiggy.com/",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      return res
        .status(response.status)
        .json({ error: `Upstream error ${response.status}`, body: text.slice(0, 200) });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("API /menu failed:", err);
    return res.status(500).json({ error: err.message || "Failed to fetch menu" });
  }
}
