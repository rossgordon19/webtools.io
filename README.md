# WebTools.io

WebTools.io is a comprehensive web-based tool suite designed to help users with various tasks. It includes features such as a QR Code Generator, URL Shortener, and Stock Image Finder. My goal with this project was to take 3 simple, junior level projects and combine them into one web application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14 or later)
- NPM (v6 or later)
- Git

### Installation

1. Clone the repository to your local machine: [https://github.com/rossgordon19/webtools.io.git]

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

Your application should now be running on local host.

## Features

### QR Code Generator

This feature allows users to generate QR codes for any input string, primarily URLs. Users can also choose the color of the QR code and download it as a PNG file.

### URL Shortener

The URL Shortener feature provides a way to shorten long URLs. It uses the `is.gd` URL shortening service. Users can copy the shortened URL to the clipboard with a single click and can clear the input and start over with another URL.

### OpenAI DALL•E 2 API

DALL·E 2 API is an advanced image generation model that combines the capabilities of natural language processing and computer vision to generate highly detailed and contextually relevant images from textual descriptions.

To avoid sharing my API key, I created a Netlify Environmental Variable, and stored my key in a .env file.

## Built With

- [React.js](https://reactjs.org) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/api/motion/) - For animations
- [React Scroll](https://www.npmjs.com/package/react-scroll) - For smooth scrolling effects
- [is.gd API](https://is.gd/developers.php) - Used for URL shortening
- [DALL·E API ](https://openai.com/blog/dall-e-api-now-available-in-public-beta) - DALL•E 2 API

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
