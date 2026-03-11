# WeSecureOne Website

This is the source code for the WeSecureOne static website, designed for deployment on GitHub Pages.

## Features
- **Next.js 15**: Modern web framework for high performance.
- **Tailwind CSS**: Utility-first styling for a custom look and feel.
- **Formspree Integration**: Serverless contact form handling.
- **Static Export**: Optimized for hosting on GitHub Pages.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```

### Deployment
The site is automatically deployed via GitHub Actions when changes are pushed to the main branch.

To manually build the static site:
```bash
npm run build
```
The output will be in the `out/` directory.

## Contact Form Configuration
To enable the contact form:
1. Get a Form ID from [Formspree](https://formspree.io/).
2. Add it to your environment variables or `.env` file:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID="your_id_here"
   ```
