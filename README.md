# QR-GEN 🚀

A modern, feature-rich QR Code Generator built with **React**, **TypeScript**, and **Tailwind CSS**. Create beautiful, customizable QR codes for various use cases with an intuitive interface and dark mode support.

![Version](https://img.shields.io/badge/QR--GEN-v1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178c6)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646cff)

---

<details>
<summary>✨ Features</summary>

### 🎯 QR Code Types

* URL - Generate QR codes for websites and links
* Text - Convert plain text to QR codes
* Phone - Create call-to-action QR codes
* Email - Generate email QR codes with subject and body
* SMS - QR codes for pre-filled text messages
* Wi-Fi - Share Wi-Fi credentials easily
* vCard - Digital business cards
* Event - Calendar events and appointments
* Location - Geographic coordinates
* Crypto - Cryptocurrency payment addresses

### 🎨 Customization

* Logo Upload - Add your logo to QR codes (SVG, PNG, JPG)
* Color Picker - Custom QR code colors
* Border Radius - Adjust logo background rounded corners
* Branding Controls - Fine-tune appearance

### 🖥️ User Experience

* Dark/Light Mode - Toggle with smooth animations
* Responsive Design - Works on all devices
* Real-time Preview - See changes instantly
* High-Quality Export - Download as SVG or PNG
* International Support - Country codes for phone numbers

</details>

<details>
<summary>🚀 Quick Start</summary>

### Prerequisites

* Node.js 16+
* npm or yarn

### Installation

```bash
git clone https://github.com/your-username/qr-gen.git
cd qr-gen
npm install
```

### Start Development Server

```bash
npm run dev
```

Open your browser at: `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

</details>

<details>
<summary>🛠️ Technology Stack & Project Structure</summary>

* **Frontend Framework:** React 18 with TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **QR Generation:** qrcode.react
* **UI Components:** Custom built with accessibility in mind

### Project Structure

```
src/
├── components/
│   ├── QRInputs/          # QR type-specific input components
│   │   ├── QRText.tsx
│   │   ├── QRUrl.tsx
│   │   ├── QRPhone.tsx
│   │   └── ...
│   ├── BrandingSettings.tsx
│   ├── BuildQRCode.tsx
│   ├── CustomSlider.tsx
│   ├── FileUpload.tsx
│   ├── Nav.tsx
│   ├── QRGenerator.tsx
│   └── QRHolder.tsx
├── App.tsx
├── main.tsx
└── globals.css
```

</details>

<details>
<summary>🎯 Usage Guide</summary>

1. **Select QR Type** - Choose from 10+ QR code types
2. **Enter Data** - Fill in the required information
3. **Customize** - Upload logo, adjust colors, and styling
4. **Download** - Export as SVG or PNG

### Supported QR Code Formats

| Type     | Description         | Use Case            |
| -------- | ------------------- | ------------------- |
| URL      | Website links       | Marketing materials |
| Text     | Plain text          | Notes, messages     |
| Phone    | Phone numbers       | Business cards      |
| Email    | Pre-filled emails   | Contact information |
| SMS      | Text messages       | Campaigns           |
| Wi-Fi    | Network credentials | Guest access        |
| vCard    | Contact cards       | Networking          |
| Event    | Calendar events     | Invitations         |
| Location | GPS coordinates     | Directions          |
| Crypto   | Payment addresses   | Transactions        |

### Branding Options

* Logo Integration: Center your logo while maintaining QR scannability
* Color Customization: Match your brand colors
* Border Radius: Control logo background styling
* High-Resolution Export: Perfect for print and digital use

</details>

<details>
<summary>🔧 Configuration</summary>

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_APP_NAME=QR-GEN
VITE_APP_DESCRIPTION=A free QR Code Generator
```

### Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      transitionTimingFunction: {
        fast: "0.15s ease-in-out",
      },
    },
  },
}
```

</details>

<details>
<summary>🌙 Dark Mode & 📱 Responsive Design</summary>

### Dark Mode

* System Preference Detection: Automatically matches OS theme
* Manual Toggle: Smooth animated toggle switch
* Persistence: Remembers user preference
* Consistent Styling: All components support both themes

### Responsive Design

* Mobile First: Optimized for mobile devices
* Tablet Friendly: Adaptive layouts for medium screens
* Desktop Optimized: Full feature set on larger screens

</details>

<details>
<summary>🔍 API Reference</summary>

### QR Code Generation

```typescript
<QRCodeSVG
  value={text}
  size={300}
  fgColor={qrColor}
  level={"M"} // Error correction level
/>
```

### File Upload

* SVG: Processed as text for vector quality
* PNG/JPG: Converted to base64 for embedding

</details>

<details>
<summary>🐛 Troubleshooting</summary>

**QR Code Not Scanning**

* Ensure sufficient contrast between QR and background
* Don't cover more than 30% with logo
* Test with multiple QR scanner apps

**Logo Not Appearing**

* Check file format (SVG, PNG, JPG supported)
* Verify SVG structure (remove XML declarations)
* Ensure file size is reasonable

**Build Errors**

* Clear `node_modules` and reinstall dependencies
* Check TypeScript compiler options
* Verify all import paths

</details>

<details>
<summary>🤝 Contributing</summary>

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards

* Use TypeScript for type safety
* Follow React best practices
* Write responsive, accessible components
* Include proper error handling

</details>

<details>
<summary>📄 License & Acknowledgments</summary>

* Licensed under **MIT License** - see LICENSE file
* Built with ❤️ using React, Tailwind CSS, Lucide Icons, Vite, and qrcode.react

</details>

<details>
<summary>🚀 Deployment</summary>

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify

### Static Hosting

* The built files in `dist` can be served by any static hosting service

</details>

<div align="center">
QR-GEN - Generate beautiful, functional QR codes for any purpose. ✨  
Made with ❤️ and React
</div>
