/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'bg-rose': 'var(--bg-rose)',
        'bg-bleu': 'var(--bg-bleu)',
        

        'fond-gauche': 'var(--fg-fond-colonne-gauche)',
        'teal': 'var(--fg-teal)',
        'teal-fonce': 'var(--fg-teal-fonce)',
        'accent-jaune': 'var(--fg-accent-jaune)',
        'accent-jaune-fonce': 'var(--fg-accent-jaune-fonce)',
        'gris-fonce': 'var(--fg-gris-fonce)',
        'gris-moyen': 'var(--fg-gris-moyen)',
      },
    },
  },
  plugins: [],
}