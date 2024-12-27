/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";

export default {
  plugins: [tailwindcssAnimated],
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        xs: "450px",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        "loop-scroll-mobile": "loop-scroll-mobile 20s linear infinite",
        "animate-stepper": "animate-stepper 0.5s ease-out",
        typing: "typing 1s steps(20)  alternate ",
      },
      keyframes: {
        "loop-scroll": {
          to: { left: "-112px" },
        },
        "loop-scroll-mobile": {
          to: { left: "-80px" },
        },
        "animate-stepper": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      backgroundImage: {
        logistic_solution_lg: "url('/images/bg/logistic_solution_lg.webp')",
        logistic_solution_med: "url('/images/bg/logistic_solution_med.webp')",
        logistic_solution_mobile:
          "url('/images/bg/logistic_solution_mobile.webp')",
        merchant_solution_lg: "url('/images/bg/merchant_solution_lg.webp')",
        merchant_solution_med: "url('/images/bg/merchant_solution_md.webp')",
        merchant_solution_mobile:
          "url('/images/bg/merchant_solution_mobile.webp')",
        contact_lg: "url('/images/bg/contact-lg.webp')",
        contact_med: "url('/images/bg/contact-med.webp')",
        contact_mobile: "url('/images/bg/contact-mobile.webp')",
        digital_bg1: "url('/images/bg/digital-bg1.webp')",
        digital_bg2: "url('/images/bg/digital-bg2.webp')",
        digital_bg3: "url('/images/bg/digital-bg3.webp')",
        joinUs: "url('/images/bg/joinus.webp')",
        joinUs_mobile: "url('/images/bg/joinus-mobile.webp')",
        register_logistic_med: "url('/images/bg/register_logistic_med.webp')",
        register_logistic_lg: "url('/images/bg/register_logistic_lg.webp')",
        register_merchants_med: "url('/images/bg/register_merchants_med.webp')",
        register_merchants_lg: "url('/images/bg/register_merchants_lg.webp')",

        drivers_registration_lg_en:
          "url('/images/bg/drivers registration/drivers_registration_lg-en.webp)",
        drivers_registration_md_en:
          "url('/images/bg/drivers registration/drivers_registration_md-en.webp')",
        drivers_registration_mobile_en:
          "url('/images/bg/drivers registration/drivers_registration_mobile-en.webp')",

        drivers_registration_lg_ar:
          "url('/images/bg/drivers registration/drivers_registration_lg-ar.webp)",
        drivers_registration_md_ar:
          "url('/images/bg/drivers registration/drivers_registration_md-ar.webp')",
        drivers_registration_mobile_ar:
          "url('/images/bg/drivers registration/drivers_registration_mobile-ar.webp')",

        about_lg: "url('/images/bg/about-lg.webp')",
        about_med: "url('/images/bg/about-md.webp')",
        about_mobile: "url('/images/bg/about-mobile.webp')",

        tick: "url('/images/icons/check-circle.svg')",
        caret: "url('/images/icons/caret.svg')",
      },
      colors: {
        primaryOrange: "#ED6132",
        darkerOrange: "#CD4213",
        lightGray: "#F6F6F6",
        customYellow: "#F7B614",
        darkGray: "#202020",
        darkText: "#333333",
      },
      fontFamily: {
        Hanimation: ["Hanimation", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xsm: "12px",
        sm: "14px",
        base: "16px",
      },
      boxShadow: {
        Button_shadow: "0px 14px 50px -12px",
        card_shadow: "0px 10px 20px 0px",
      },
      letterSpacing: {
        xl: "0.2em",
      },
      width: {
        84: "24rem",
        18: "4.5rem",
        inherit: "inherit",
        15: "3.75rem",
      },
      height: {
        "99vh": "99vh",
        68: "17rem",
        84: "21rem",
        18: "4.5rem",
        74: "300px",
        15: "3.75rem",
        120: "540px",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      lineHeight: { 1.3: 1.3 },
      flex: {
        card_full: "0 1 calc(20% - 20px)",
        card_testimonial_xl: "0 1 calc(33.3333% - 20px)",
      },
      inset: {
        "2/5": "40%",
        26: "6.5rem",
        18: "76px",
      },
    },
  },
};
