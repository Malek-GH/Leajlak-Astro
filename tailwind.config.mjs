/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";

export default {
  plugins: [tailwindcssAnimated],
  content: ["./src/**/*.html", "./src/**/*.astro", "./src/**/*.js"],
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
      transitionTimingFunction: { carousel: "cubic-bezier(0.25, 0.8, 0.5, 1)" },
      backgroundImage: {
        blurredAboutBg: "url('/src/images/bg/about-blurred.webp')",
        blurredContactBg: "url('/src/images/bg/contact-blurred.webp')",
        blurredmerchant_solution:
          "url('/src/images/bg/merchant_solution_blurred.webp')",
        blurredlogistic_solution:
          "url('/src/images/bg/logistic_solution_blurred.webp')",
        blurredlogistic_register:
          "url('/src/images/bg/register_logistic_blurred.webp')",
        blurredmerchant_register:
          "url('/src/images/bg/register_merchants_blurred.webp')",
        blurredDriver_register:
          "url('/src/images/bg/drivers_registration/drivers_registration_blurred-en.webp')",

        tick: "url('/src/images/icons/check-circle.svg')",
        caret: "url('/src/images/icons/caret.svg')",
        digital_bg1: "url('/src/images/bg/digital-bg1.webp')",
        digital_bg2: "url('/src/images/bg/digital-bg2.webp')",
        digital_bg3: "url('/src/images/bg/digital-bg3.webp')",
        blurredjoinUs: "url('/src/images/bg/joinusblurred.webp')",
      },
      colors: {
        primaryOrange: "#ED6132",
        darkerOrange: "#CD4213",
        secondaryBlue: "#0E1F42",
        secondaryBlueText: "#292F3D",
        secondaryBlueDark: "#212631",
        lightGray: "#F6F6F6",
        customYellow: "#F7B614",
        darkGray: "#202020",
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
        84: "22rem",
        18: "4.5rem",
        inherit: "inherit",
        15: "3.75rem",
        chatbot: "23vw",
      },
      height: {
        68: "17rem",
        84: "21rem",
        18: "4.5rem",
        74: "300px",
        15: "3.75rem",
        120: "540px",
        hero: "92vh",
        chatbot: "75vh",
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
