export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { event_name, user_data, custom_data } = req.body;

  const pixelId = 1306750357052952;
  const accessToken =
    "EAAUJYTcsmYwBOz0a3HHhrVkLYVm0z6UrDH89YdOTCGik3xw3vLKuZB8omuZALdRf2gX0yez8QRbb5dR03xgS8SbzgtNYDFW76VKQq0uOJGhEZA9wsnNjjupWvPoWXI8q9cPJBd38dUQ5owLUd6VhgltUMcnZB1DI3ZAuf8lIPBDKQlcQR71JmciOy1m2kn6V8ZBAZDZD";
  const url = `https://graph.facebook.com/v14.0/${pixelId}/events`;

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        user_data,
        custom_data,
        action_source: "website",
      },
    ],
  };

  try {
    const fbResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await fbResponse.json();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send event to Facebook" });
  }
}
