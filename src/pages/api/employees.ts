import type { APIRoute } from "astro";
export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const lang = formData.get("lang")?.toString() || "en";
    const position = formData.get("position");
    const fullName = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const number = formData.get("number");
    const file_input = formData.get("file_input");

    console.log({
      position,
      fullName,
      email,
      message,
      number,
      file_input,
    });
    return new Response(null, {
      status: 302,
      headers: { Location: `/${lang}/contact/employees` },
    });
  } catch (err) {
    console.error(err);
    return new Response("An error occurred.", { status: 500 });
  }
};
