module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colors-component-general-border-color":
          "var(--colors-component-general-border-color)",
        "colors-component-general-component-color":
          "var(--colors-component-general-component-color)",
        company: "var(--company)",
        footor: "var(--footor)",
        "grey-30": "var(--grey-30)",
        "header-color": "var(--header-color)",
        "kit-section-fill": "var(--kit-section-fill)",
        line: "var(--line)",
        "liquid-glass-labels-controls-primary":
          "var(--liquid-glass-labels-controls-primary)",
        people: "var(--people)",
        "primary-cta": "var(--primary-cta)",
        product: "var(--product)",
        project: "var(--project)",
        "variable-collection-blck": "var(--variable-collection-blck)",
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-CPS-dark-grey":
          "var(--variable-collection-CPS-dark-grey)",
        "variable-collection-CPS-white": "var(--variable-collection-CPS-white)",
        "variable-collection-white-80": "var(--variable-collection-white-80)",
        "white-bg": "var(--white-bg)",
        "white-bg-40": "var(--white-bg-40)",
        "white-bg-60": "var(--white-bg-60)",
        "white-bg-80": "var(--white-bg-80)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-small": "var(--body-small-font-family)",
        "body-text": "var(--body-text-font-family)",
        "button-text": "var(--button-text-font-family)",
        "button-underline": "var(--button-underline-font-family)",
        close: "var(--close-font-family)",
        "heading-desktop-h6": "var(--heading-desktop-h6-font-family)",
        "home-button": "var(--home-button-font-family)",
        "light-big": "var(--light-big-font-family)",
        "main-headers": "var(--main-headers-font-family)",
        "navigation-nav-link-regular":
          "var(--navigation-nav-link-regular-font-family)",
        "navigation-nav-link-small":
          "var(--navigation-nav-link-small-font-family)",
        short: "var(--short-font-family)",
        small: "var(--small-font-family)",
        "SUB-bold": "var(--SUB-bold-font-family)",
        "sub-headers": "var(--sub-headers-font-family)",
        "SUB-light": "var(--SUB-light-font-family)",
        "tagline-notes": "var(--tagline-notes-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "light-medium": "var(--light-medium)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
