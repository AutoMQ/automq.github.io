/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        "accent-disabled": "var(--color-accent-disabled)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-text": "var(--color-accent-text)",

        main: "var(--color-main)",
        "main-hover": "var(--color-main-hover)",
        "main-text": "var(--color-main-text)",

        control: "var(--color-control)",
        "control-hover": "var(--color-control-hover)",

        "control-light": "var(--color-control-light)",
        "control-light-hover": "var(--color-control-light-hover)",

        "control-bg": "var(--color-control-bg)",
        "control-bg-hover": "var(--color-control-bg-hover)",

        "control-placeholder": "var(--color-control-placeholder)",

        info: "var(--color-info)",
        "info-hover": "var(--color-info-hover)",

        warning: "var(--color-warning)",
        "warning-hover": "var(--color-warning-hover)",

        error: "var(--color-error)",
        "error-hover": "var(--color-error-hover)",

        success: "var(--color-success)",
        "success-hover": "var(--color-success-hover)",

        "link-hover": "var(--color-link-hover)",

        "block-border": "var(--color-block-border)",
        "control-border": "var(--color-control-border)",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
      },
      animation: {
        "ping-slow": "ping-slow 2500ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "ping-slow": {
          "50%": {
            transform: "scale(3)",
            opacity: "0.05",
          },
          "100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
      },
      typography: {
        // These configs are to override the default `prose` theme.
        DEFAULT: {
          css: {
            ".prose":{
              'max-width':'unset'
            },
            // Make images fill the horizontal space.
            img: {
              width: "100%",
            },
            // Add background to inline code.
            code: {
              padding: "0 0.4em",
              margin: 0,
              fontSize: "1em",
              backgroundColor: "#f5f2f0",
              borderRadius: "6px",
              fontWeight: "inherit",
              color: "inherit",
            },
            // Remove backticks of inline code.
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            "li::marker":{
              color:'unset'
            }
            
          },
        },
        // Apply same configs to `xl` screens.
        xl: {
          css: {
            code: {
              padding: "0 0.4em",
              margin: 0,
              fontSize: "1em",
              backgroundColor: "#f5f2f0",
              borderRadius: "6px",
              fontWeight: "inherit",
              color: "inherit",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["focus-visible"],
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      margin: ["focus"],
      textColor: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
