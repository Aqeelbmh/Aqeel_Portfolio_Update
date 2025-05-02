#!/bin/bash

# Create necessary directories
mkdir -p src/components/sections
mkdir -p public/images

# Initialize npm project
npm init -y

# Install dependencies
npm install next@14.1.0 react@18.2.0 react-dom@18.2.0 framer-motion@11.0.3 react-intersection-observer@9.5.3 react-scroll@1.9.0

# Install dev dependencies
npm install -D typescript@5.3.3 @types/node@20.11.16 @types/react@18.2.52 @types/react-dom@18.2.18 @types/react-scroll@1.8.10 @typescript-eslint/eslint-plugin@6.21.0 @typescript-eslint/parser@6.21.0 eslint@8.56.0 eslint-config-next@14.1.0 autoprefixer@10.4.17 postcss@8.4.33 tailwindcss@3.4.1

# Create Next.js config
echo "/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig" > next.config.js

# Create TypeScript config
echo '{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}' > tsconfig.json

# Create Tailwind config
echo "/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}" > tailwind.config.js

# Create PostCSS config
echo "module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}" > postcss.config.js

# Create ESLint config
echo '{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "off"
  }
}' > .eslintrc.json

# Update package.json scripts
npm pkg set scripts.dev="next dev"
npm pkg set scripts.build="next build"
npm pkg set scripts.start="next start"
npm pkg set scripts.lint="next lint"

echo "Project setup complete! You can now run 'npm run dev' to start the development server." 