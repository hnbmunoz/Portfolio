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

- **Frontend**: React 19.1.1, TypeScript 5.9.2
- **Build Tool**: Vite 6.3.5
- **Styling**: SCSS/Sass 1.90.0 with organized architecture
- **State Management**: Zustand 5.0.7
- **Development**: Hot Module Replacement (HMR)
- **Linting**: ESLint with TypeScript support
- **Deployment**: GitHub Actions with GitHub Pages

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── Reference/              # Reference documents
│   └── RESUME_MUÑOZ, HENRI NICHOLLI (1).pdf
├── src/
│   ├── assets/             # Static assets
│   │   └── .gitkeep
│   ├── components/         # React components (organized by feature)
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   ├── Contact.scss
│   │   │   └── index.ts
│   │   ├── Education/
│   │   │   ├── Education.tsx
│   │   │   ├── Education.scss
│   │   │   └── index.ts
│   │   ├── Experience/
│   │   │   ├── Experience.tsx
│   │   │   ├── Experience.scss
│   │   │   └── index.ts
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.scss
│   │   │   └── index.ts
│   │   ├── Navigation/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Navigation.scss
│   │   │   └── index.ts
│   │   ├── Skills/
│   │   │   ├── Skills.tsx
│   │   │   ├── Skills.scss
│   │   │   └── index.ts
│   │   └── ThemeToggle/
│   │       ├── ThemeToggle.tsx
│   │       └── index.ts
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
│   │   ├── abstracts/      # Variables, mixins, functions
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── base/           # Reset, typography, base styles
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── components/     # Component-specific styles
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _forms.scss
│   │   │   └── _navigation.scss
│   │   ├── layout/         # Layout-specific styles
│   │   │   ├── _footer.scss
│   │   │   ├── _grid.scss
│   │   │   └── _header.scss
│   │   ├── pages/          # Page-specific styles
│   │   │   └── _home.scss
│   │   ├── themes/         # Theme definitions
│   │   │   ├── _dark.scss
│   │   │   └── _light.scss
│   │   ├── utilities/      # Utility classes
│   │   │   ├── _colors.scss
│   │   │   ├── _display.scss
│   │   │   ├── _flexbox.scss
│   │   │   └── _spacing.scss
│   │   ├── animations.scss # Animation definitions
│   │   └── main.scss       # Main stylesheet entry point
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── index.ts
│   │   └── theme.ts
│   ├── App.tsx             # Main App component
│   ├── App.scss            # App-specific styles
│   ├── App.css             # Legacy CSS (if needed)
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── package-lock.json       # Dependency lock file
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript Node configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
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
- `npm run build` - Clean dist folder, compile TypeScript, and build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint with TypeScript support

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

### Automatic Deployment (GitHub Pages)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The deployment workflow:

1. **Triggers**: Automatically deploys on push to `main` branch
2. **Build Process**: Runs `npm ci` and `npm run build`
3. **Deployment**: Deploys the `dist` folder to GitHub Pages
4. **URL**: Available at your GitHub Pages URL

The deployment configuration is in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Manual Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Alternative Deployment Options

#### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

#### Deploy to Netlify

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