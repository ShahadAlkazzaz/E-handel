import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx}', // lägg till denna rad om du använder mappstrukturen från Next.js 13
    ],
    theme: {
        extend: {
            colors: {
                marsala: '#8F4553',
                ivory: '#F4F3F1',
                pewter: '#E6E5E3',
                rosewater: '#E2ACB9',
                primary: '#8F4553',
                'primary-dark': '#723847'
            }
        }
    },
    plugins: []
}
export default config
