import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  important: true,
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#87CDF6', light: '#CCEAFB', dark: '#108ED8' },
        secondary: { DEFAULT: '#f6b087', light: '#f9cfb7', dark: '#c48c6c' },
      },
    },
  },
}