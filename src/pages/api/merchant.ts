import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const lang = formData.get("lang")?.toString() || "en";
    const name = formData.get("contactName");
    const email = formData.get("contactEmail");
    const number = formData.get("contactNumber");

    console.log({ name, email, number });

    return new Response(null, {
      status: 302,
      headers: {
        Location: `/${lang}/contact/merchants`,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("An error occurred.", { status: 500 });
  }
};
