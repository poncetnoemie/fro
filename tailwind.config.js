module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        black: {
          default: "#111111"
        },
        blue: {
          dark: "#81c5b9",
          default: "#98c6be"
        },
        yellow: {
          default: "#e7c836"
        },
        white: {
          default: "#fefefe"
        }
      },
      maxWidth: theme => ({
        ...theme("spacing")
      }),
      minWidth: theme => ({
        ...theme("spacing")
      })
    },
    inset: theme => ({
      ...theme("spacing"),
      full: "100%",
      "1/2": "50%"
    })
  },
  variants: {
    visibility: ["responsive", "group-hover"],
    textColor: ["responsive", "group-hover"]
  },
  plugins: []
};
