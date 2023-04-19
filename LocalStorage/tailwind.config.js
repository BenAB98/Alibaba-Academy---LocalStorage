/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            spacing : {
                "5px":"5px"
            }
        },
        container: {
            center: true,
            padding: "1rem",
        },
    },
    plugins: [],
}