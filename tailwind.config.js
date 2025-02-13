/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Quét tất cả các tệp React trong thư mục src
  ],
  theme: {
    extend: {}, // Dùng để tùy chỉnh thêm các kiểu CSS
  },
  plugins: [], // Thêm plugin nếu cần, như `@tailwindcss/forms` hoặc `@tailwindcss/typography`
};
