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
          default: "#111111",
          "75": "rgba(0,0,0,.75)",
          "50": "rgba(0,0,0,.50)",
          "25": "rgba(0,0,0,.25)"
        },
        blue: {
          dark: "#81c5b9",
          default: "#98c6be"
        },
        yellow: {
          default: "#e7c836"
        },
        white: {
          default: "#fefefe",
          "90": "rgba(255,255,255,.90)",
          "75": "rgba(255,255,255,.75)",
          "50": "rgba(255,255,255,.50)",
          "25": "rgba(255,255,255,.25)"
        }
      },
      margin: {
        "screen-10": "10vw"
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
