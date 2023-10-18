/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "order-sukses.html",
    "my-order.html",
    "refund.html",
  "login.html",
  "register.html",
  "my-payment.html",
  "security.html",
  "personal-info.html",
  "explore.html",
  "about.html",
  "konfirmasi-bayar.html",
  "review.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#82CADE",
        dark: "#0f172a",
      },
      fontFamily: {
        Primary: ["Poppins", "sans-serif"], // 700
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    
  ],
};
