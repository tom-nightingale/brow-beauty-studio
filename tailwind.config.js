module.exports = {
  mode: 'jit',
  purge: {
      content: ['./pages/**/*.js', './components/**/*.js'],
      safelist: [
        //
      ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      sans: [
        'Montserrat',
        'sans-serif',
      ],
      serif: [
        'Taviraj',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    extend: {
      colors: {
        primary: {
          light: "#eee",
          DEFAULT: "#ccc",
          dark: "#666",
        },
        secondary: {
          light: "#f83",
          DEFAULT: "#d0dfe5",
          dark: "#c0ced3",
        },
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("screens"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        25: "25vh",
        50: "50vh",
        75: "75vh",
      }),
    },
  },
  variants: {
  },
  plugins: [
  ],
  corePlugins: {
    container: false,
  },
}