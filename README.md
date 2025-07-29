# Psalm Eleazar - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, minimal, and sophisticated interface
- **Responsive**: Optimized for all devices and screen sizes
- **Dark Mode**: Automatic theme switching with manual toggle
- **Type Safe**: Built with TypeScript for better development experience
- **Performance**: Optimized with Next.js 14 and modern web standards
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Detailed project pages with filtering capabilities
- **Animations**: Subtle animations and micro-interactions using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Email**: Nodemailer
- **Theme**: next-themes

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── projects/[id]/     # Dynamic project pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── sections/          # Page sections
│   └── ui/               # Reusable UI components
├── data/                  # Static data files
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your email credentials in `.env.local`

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📧 Email Configuration

For the contact form to work, you need to set up email credentials:

1. Create a Gmail account or use an existing one
2. Enable 2-factor authentication
3. Generate an "App Password" for this application
4. Add the credentials to your `.env.local` file:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Project description...",
  state: "Deployed", // "Deployed" | "In Development" | "In Testing" | "Discontinued"
  link: "https://project-url.com",
  image: "/images/project-image.png",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  date: "2025-01",
  github: false
}
```

### Updating Personal Information

1. **Hero Section**: Edit `src/components/sections/Hero.tsx`
2. **Timeline**: Edit `src/data/timeline.ts`
3. **Contact Links**: Update social links in components
4. **Resume Link**: Update the Google Docs link in navigation and hero

### Styling

The project uses Tailwind CSS with custom design tokens defined in:

- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - CSS variables and global styles

## 📱 Sections

- **Hero**: Introduction and call-to-action
- **Projects**: Filterable project showcase with detail pages
- **Timeline**: Professional experience and education
- **Contact**: Contact form and social links

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📄 License

This project is personal portfolio website. Feel free to use it as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📞 Contact

- **Email**: videna.psalmeleazar@gmail.com
- **LinkedIn**: [linkedin.com/in/pevidena](https://linkedin.com/in/pevidena)
- **GitHub**: [github.com/P541M](https://github.com/P541M)
- **Twitter**: [@psalmeleazar](https://twitter.com/psalmeleazar)
