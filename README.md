# Aqeel's Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio showcases my work, skills, and experience in web development.

## 🌟 Features

- 🎨 Modern and clean design with attention to detail
- 📱 Fully responsive across all devices
- ✨ Smooth animations and transitions using Framer Motion
- 🎯 SEO optimized for better visibility
- 📝 Blog section for sharing thoughts and experiences
- 📬 Contact form with Formspree integration
- 🌙 Dark mode support for better user experience
- 🚀 Fast loading and optimized performance
- 🔍 Accessible design following WCAG guidelines

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Form Handling:** Formspree
- **Deployment:** Vercel
- **Version Control:** Git

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-aqeel.git
cd portfolio-aqeel
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-aqeel/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── styles/
│       └── globals.css
├── public/
│   └── images/
├── .env.local
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Customization

1. **Personal Information:**
   - Update your details in the respective components
   - Modify the content in `src/components/sections/`
   - Update social media links in the Footer component

2. **Styling:**
   - Replace images in the `public/images` directory
   - Modify colors and theme in `tailwind.config.js`
   - Customize animations in components using Framer Motion

3. **Configuration:**
   - Update Formspree form ID in `.env.local`
   - Modify SEO settings in `layout.tsx`
   - Adjust meta tags for better SEO

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables
4. Deploy!

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

For any questions, suggestions, or collaboration opportunities, please reach out through:
- The contact form on the website
- Email: [your-email@example.com]
- LinkedIn: [your-linkedin-profile]

## 🙏 Acknowledgments

- Thanks to all the open-source projects that made this possible
- Special thanks to the Next.js and Tailwind CSS communities
- Inspired by modern web design trends and best practices
