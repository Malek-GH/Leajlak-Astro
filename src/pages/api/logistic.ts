import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const lang = formData.get("lang")?.toString() || "en";
    const name = formData.get("contactName");
    const email = formData.get("contactEmail");
    const number = formData.get("contactNumber");
    const company_name = formData.get("companyName");
    const company_website = formData.get("company_website");
    const crNumber = formData.get("crNumber");
    const location_link = formData.get("location_link");
    const captain_numbers = formData.get("captain_numbers");
    const Coverage_area = formData.get("Coverage_area");
    console.log({
      name,
      email,
      number,
      company_name,
      company_website,
      crNumber,
      location_link,
      captain_numbers,
      Coverage_area,
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: `/${lang}/contact/logistic-companies`,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("An error occurred.", { status: 500 });
  }
};
