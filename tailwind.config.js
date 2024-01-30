module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#0a0c12",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_01": "#000000",
          "900_00": "#00000000",
          "900_4c": "#0000004c",
          "900_0c": "#0000000c",
          "900_19": "#00000019",
          "900_59": "#00000059",
          "900_33": "#00000033",
        },
        red: { 500: "#ea4335", 600: "#d75336" },
        amber: {
          500: "#ffc107",
          "500_66": "#ffc10766",
          "500_19": "#ffc10719",
          "500_51": "#ffc10751",
          "500_01": "#fbbc05",
          "500_33": "#ffc10733",
        },
        blue: { 300: "#72adf1", A200: "#4285f4", A200_99: "#3d82f099" },
        yellow: { 800: "#e69e12" },
        white: {
          A700_19: "#ffffff19",
          A700_0c: "#ffffff0c",
          A700_0a: "#ffffff0a",
          A700: "#ffffff",
        },
        blue_gray: {
          50: "#f1f1f1",
          100: "#d9d9d9",
          300: "#a0abbe",
          400: "#7a8699",
          600: "#616875",
          700: "#4b5362",
          800: "#3d4351",
          900: "#2c374a",
          "900_01": "#2f3644",
          "800_16": "#2f3a4c16",
          "900_33": "#2c374a33",
          "700_02": "#505663",
          "700_01": "#4b5363",
          "700_04": "#495568",
          "700_03": "#4f5662",
          "900_4c": "#2c374a4c",
          "800_02": "#2d384a",
          "800_03": "#2f3a4c",
          "600_01": "#56647f",
          "600_02": "#566480",
          "600_03": "#4f5e77",
          "800_00": "#2f3a4c00",
          "800_01": "#3d4452",
        },
        gray: {
          100: "#f6f6f6",
          400: "#c4c4c4",
          500: "#999999",
          600: "#8d5b5b",
          700: "#606060",
          800: "#3b3b3b",
          900: "#13161c",
          "700_33": "#5e5e5e33",
          "900_33": "#1e1e1e33",
          "500_01": "#a4a4a4",
          "900_02": "#0f1217",
          "900_03": "#1f232c",
          "900_04": "#272727",
          "900_05": "#3f3209",
          "900_01": "#191e26",
          "900_06": "#342807",
          "800_33": "#44444433",
          "800_30": "#48484830",
          "900_7f": "#181d257f",
        },
        orange: { 200: "#ffbf71", A200: "#f8a047", A100: "#ffd96a" },
        green: { 600: "#34a853", A400_19: "#15cd7219", A400: "#15cd72" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#5e5e5e33,#1e1e1e33)",
        gradient1: "linear-gradient(135deg ,#5e5e5e33,#1e1e1e33)",
        gradient2: "linear-gradient(180deg ,#00000000,#272727)",
        gradient3: "linear-gradient(270deg ,#2f3a4c00,#2f3a4c,#2f3a4c16)",
      },
      fontFamily: {
        montserrat: "Montserrat",
        plusjakartasans: "Plus Jakarta Sans",
      },
      boxShadow: {
        bs: "0px -3px  10px 0px #ffc10751",
        bs2: "0px 4px  4px 0px #0000003f",
        bs1: "0px 4px  10px 0px #0000004c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
