const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: colors.cyan,
      },
      // See tailwind default theme for theme keys
      // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            pre: {
              margin: 0,
            },
            p: {
              margin: 0,
              paddingBottom: theme("spacing.5"),
            },
            "h1, h2, h3, h4, h5, h6": {
              margin: 0,
            },
            "ul, ol, li": {
              margin: 0,
            },
            "ul, ol": {
              paddingBottom: theme("spacing.5"),
            },
            blockquote: {
              fontWeight: theme("fontWeight.normal"),
              fontStyle: "normal",
              backgroundColor: theme("colors.cyan.600"),
              borderLeftColor: theme("colors.cyan.400"),
              borderLeftWidth: theme("borderWidth.8"),
              color: "white",
              marginTop: 0,
              marginBottom: theme("spacing.4"),
              marginInline: "-0.5rem",
              paddingBlock: theme("spacing.4"),
              paddingInline: theme("spacing.6"),
              borderRadius: theme("borderRadius.md"),
              quotes: "none",
              "& > p": {
                padding: 0,
                margin: 0,
              },
            },
            a: {
              color: theme("colors.pink.600"),
              textDecorationLine: "none",
              "&:hover": {
                textDecorationLine: "underline",
              },
            },
            h1: {
              fontSize: theme("fontSize.3xl")[0],
              lineHeight: theme("fontSize.3xl")[1].lineHeight,
            },
            img: {
              borderRadius: theme("borderRadius.md"),
              margin: "0 auto",
            },
            "p, li": {
              code: {
                color: "inherit",
                backgroundColor: theme("colors.zinc.200"),
                padding: "0.25rem 0.5rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: "400",
              },
            },
            ".inline-code-block": {
              code: {
                backgroundColor: theme("colors.zinc.800"),
              },
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },

        // Dark Mode specific styles
        invert: {
          css: {
            blockquote: {
              backgroundColor: theme("colors.cyan.600"),
              borderLeftColor: theme("colors.cyan.400"),
            },
            a: {
              color: theme("colors.pink.700"),
              border: theme("colors.pink.700"),
            },
            "p, li": {
              code: {
                backgroundColor: theme("colors.zinc.800"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-rtl")],
};
