export default async function handler(req, res) {
  try {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari",
        "Referer": "https://www.swiggy.com/",
      },
    });

    // log status for debugging
    console.log("Swiggy response status:", response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error("Swiggy error body:", text.slice(0, 200));
      return res
        .status(response.status)
        .json({ error: `Upstream error ${response.status}` });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("API route failed:", err);
    return res
      .status(500)
      .json({ error: err.message || "Failed to fetch from Swiggy" });
  }
}