export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const body = await request.json();

    if (!body || !Array.isArray(body.contents)) {
      return Response.json(
        { error: "Invalid Gemini request body." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "GEMINI_API_KEY is not configured on Netlify." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify(body)
      }
    );

    const responseText = await response.text();

    return new Response(responseText, {
      status: response.status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return Response.json(
      { error: "Unable to contact Gemini.", details: error.message },
      { status: 500 }
    );
  }
};

export const config = {
  path: "/api/gemini"
};
