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
    const industry_type = formData.get("food");
    const location_link = formData.get("location_link");
    const branch_numbers = formData.get("branch_numbers");
    const region = formData.get("region");
    const volume = formData.get("volume");
    const POS = formData.get("POS");

    console.log({
      name,
      email,
      number,
      company_name,
      company_website,
      industry_type,
      location_link,
      branch_numbers,
      region,
      volume,
      POS,
    });

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
