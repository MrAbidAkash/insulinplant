import { NextResponse } from "next/server";

// Next.js 15 API Route (Server Actions)
export async function POST(request) {
  try {
    const body = await request.json();
    const { event_name, user_data, custom_data } = body;

    const pixelId = "1306750357052952";
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

    const fbResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await fbResponse.json();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to send event to Facebook" },
      { status: 500 },
    );
  }
}

// Optional: Handle non-POST requests
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
