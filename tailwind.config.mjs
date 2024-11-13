/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      animation: {
        "loop-scroll": "loop-scroll 35s linear infinite",
        "loop-scroll-mobile": "loop-scroll-mobile 35s linear infinite",
        "animate-stepper": "animate-stepper 0.5s ease-out",
      },
      keyframes: {
        "loop-scroll": {
          to: { left: "-100px" },
        },
        "loop-scroll-mobile": {
          to: { left: "-56px" },
        },
        "animate-stepper": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      backgroundImage: {
        logistic: "url('/src/images/bg/fleet-page.webp')",
        logistic_mobile: "url('/src/images/bg/fleet-page-mobile.webp')",
        merchant: "url('/src/images/bg/restaurent-page.webp')",
        merchant_mobile: "url('/src/images/bg/restaurent-page-mobile.webp')",
        merchant2: "url('/src/images/bg/merchant-bg.webp')",
        merchant2_mobile: "url('/src/images/bg/merchant-mobile-bg.webp')",
        contact: "url('/src/images/bg/riyadh.webp')",
        contact_mobile: "url('/src/images/bg/riyadh-mobile.webp')",
        digital_bg1: "url('/src/images/bg/digital-bg1.webp')",
        digital_bg2: "url('/src/images/bg/digital-bg2.webp')",
        digital_bg3: "url('/src/images/bg/digital-bg3.webp')",
        joinUs: "url('/src/images/bg/joinus.webp')",
        joinUs_mobile: "url('/src/images/bg/joinus-mobile.webp')",
        thirdPL: "url('/src/images/bg/3PL.webp')",
        team: "url('/src/images/bg/team.webp')",
        team_mobile: "url('/src/images/bg/team-mobile.webp')",
        drviers_registration: "url('/src/images/bg/drivers_registration.webp')",
        tick: "url('/src/images/icons/check-circle.svg')",
        caret: "url('/src/images/icons/caret.svg')",
      },
      colors: {
        primaryOrange: "#EC6131",
        secondaryBlue: "#0D2035",
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
        Button_shadow: "0px 24px 50px -12px",
        card_shadow: "0px 10px 20px 0px",
      },
      letterSpacing: {
        xl: "0.2em",
      },
      width: {
        84: "24rem",
        18: "4.5rem",
      },
      height: {
        84: "21rem",
        100: "24.5rem",
        18: "4.5rem",
      },
      lineHeight: { 1.5: 1.5, 1.4: 1.4, 1.3: 1.3, 1.2: 1.2 },
      flex: {
        card_full: "0 1 calc(20% - 20px)",
        card_md: "0 0 calc(50% - 20px)",
        card_sm: "0 1 calc(100% - 20px)",
        card_solution_xl: "0 1 calc(33.3333% - 20px)",
        card_solution_md: "0 1 calc(50% - 40px)",
        card_xl: "0 1 calc(100% - 20px)",
        card_testimonial_xl: "0 1 calc(33.3333% - 20px)",
        card_team_xl: "0 1 25%",
        card_team_md: "0 1 50%",
        card_team_sm: "0 1 100%",
      },
      inset: {
        "2/5": "40%",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
