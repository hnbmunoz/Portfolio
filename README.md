# Henri Nicholli Muñoz - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and SCSS. Features a clean design with dark/light theme support and smooth animations.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Smooth Animations**: Scroll-reveal animations for enhanced user experience
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Component-Based Architecture**: Modular and maintainable code structure
- **SCSS Styling**: Organized with BEM methodology and theme system
- **Type Safety**: Full TypeScript implementation
- **State Management**: Zustand for lightweight state management

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS with organized architecture
- **State Management**: Zustand
- **Development**: Hot Module Replacement (HMR)
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/          # React components
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/               # Static data files
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── personalInfo.ts
│   │   ├── portfolio.ts
│   │   ├── skills.ts
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   │   ├── useCounter.ts
│   │   ├── useScrollReveal.ts
│   │   └── useTheme.ts
│   ├── stores/             # State management
│   │   └── themeStore.ts
│   ├── styles/             # SCSS stylesheets
│   │   ├── abstracts/      # Variables, mixins
│   │   ├── base/           # Reset, typography
│   │   ├── components/     # Component styles
│   │   ├── layout/         # Layout styles
│   │   ├── pages/          # Page-specific styles
│   │   ├── themes/         # Theme definitions
│   │   ├── utilities/      # Utility classes
│   │   ├── animations.scss
│   │   └── main.scss
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── index.ts
│   │   └── theme.ts
│   ├── App.tsx
│   ├── App.scss
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hnbmunoz/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with auto-open
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update your personal information in [`src/data/personalInfo.ts`](src/data/personalInfo.ts):

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  location: "Your Location",
  email: "your.email@example.com",
  // ... other fields
};
```

### Skills

Add or modify skills in [`src/data/skills.ts`](src/data/skills.ts):

```typescript
export const skills: Skill[] = [
  {
    name: "JavaScript",
    level: 90,
    category: "Frontend"
  },
  // ... more skills
];
```

### Experience & Education

Update your professional experience in [`src/data/experience.ts`](src/data/experience.ts) and education in [`src/data/education.ts`](src/data/education.ts).

### Themes

Customize themes in:
- [`src/styles/themes/_light.scss`](src/styles/themes/_light.scss)
- [`src/styles/themes/_dark.scss`](src/styles/themes/_dark.scss)

## 🎯 Features Overview

### Theme System
- Persistent theme preference using localStorage
- Smooth transitions between themes
- System preference detection

### Animations
- Scroll-reveal animations for sections
- Smooth hover effects
- Responsive animations

### Components
- **Hero**: Introduction section with personal info
- **Skills**: Interactive skills showcase
- **Experience**: Professional experience timeline
- **Education**: Educational background
- **Contact**: Contact information and links
- **Navigation**: Responsive navigation with theme toggle

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Henri Nicholli Muñoz**
- Email: hnbmunoz@gmail.com
- LinkedIn: [henri-nicholli-munoz](https://linkedin.com/in/henri-nicholli-munoz)
- GitHub: [hnbmunoz](https://github.com/hnbmunoz)

---

Built with ❤️ using React, TypeScript, and SCSS