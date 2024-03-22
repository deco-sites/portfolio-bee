import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 20s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%, 100%": {
            transform: "translateX(0%)",
          },
          "50%": {
            transform: "translateX(calc(-2652px + 332px))",
          },
        },
      },
    },
  },
};
