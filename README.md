# QR-GEN

A modern, feature-rich QR Code Generator built with **React**, **TypeScript**, and **Tailwind CSS**. Easily create customizable QR codes for various use cases with an intuitive interface and dark mode support.

![Version](https://img.shields.io/badge/QR--GEN-v1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178c6)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646cff)

---

<details>
<summary>Features</summary>

### QR Code Types

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

### Customization

* Logo Upload - Add your logo to QR codes (SVG, PNG, JPG)
* Color Picker - Custom QR code colors
* Border Radius - Adjust logo background rounded corners
* Branding Controls - Fine-tune appearance

### User Experience

* Dark/Light Mode toggle
* Responsive Design for all devices
* Real-time Preview of changes
* High-Quality Export (SVG or PNG)
* International Support for phone numbers

</details>

<details>
<summary>Quick Start</summary>

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
<summary>Technology Stack & Project Structure</summary>

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
<summary>Usage Guide</summary>

1. Select QR Type from the available options
2. Enter the required data
3. Customize logo, colors, and styling
4. Download as SVG or PNG

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

* Logo Integration while maintaining QR scannability
* Color Customization to match your brand
* Border Radius for logo background styling
* High-Resolution Export suitable for print and digital use

</details>

<details>
<summary>Configuration</summary>

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
<summary>Dark Mode & Responsive Design</summary>

### Dark Mode

* Matches system preference
* Manual toggle available
* User preference is persisted
* All components support both themes

### Responsive Design

* Mobile-first layout
* Tablet-friendly adaptations
* Full feature set on desktop

</details>

<details>
<summary>API Reference</summary>

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

* SVG: Processed as text
* PNG/JPG: Converted to base64 for embedding

</details>

<details>
<summary>Troubleshooting</summary>

**QR Code Not Scanning**

* Ensure contrast between QR and background
* Limit logo coverage to 30%
* Test with multiple scanner apps

**Logo Not Appearing**

* Check supported file formats
* Verify SVG structure
* Ensure file size is reasonable

**Build Errors**

* Clear `node_modules` and reinstall
* Check TypeScript options
* Verify import paths

</details>

<details>
<summary>Contributing</summary>

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push branch
5. Open a Pull Request

### Code Standards

* Use TypeScript
* Follow React best practices
* Write responsive, accessible components
* Include proper error handling

</details>

<details>
<summary>License & Acknowledgments</summary>
- MIT License - see LICENSE file  
- Built with React, Tailwind CSS, Lucide Icons, Vite, and qrcode.react  
</details>

<details>
<summary>Deployment</summary>

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

1. Build: `npm run build`
2. Drag `dist` folder to Netlify

### Static Hosting

* Files in `dist` can be served by any static host

</details>

<div align="center">
QR-GEN - Generate functional QR codes for any purpose.  
Built with React and Tailwind CSS
</div>
