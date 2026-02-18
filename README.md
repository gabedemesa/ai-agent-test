# ai-agent-test

A starter kit demonstrating how to integrate the OpenGov Agent SDK into a React application with a navbar component.

![Proof](proof.png)

## Tech Stack

- React 19
- TypeScript
- Vite
- OpenGov Components Nav Bar
- Auth0 Authentication

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Auth0 account credentials
- OpenGov npm registry access token

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-agent-test
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file with the required credentials:
```
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_AUTH0_DOMAIN=your_auth0_domain
NPM_AUTH_TOKEN=your_opengov_npm_token
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Code Review

This project uses Claude AI for automated code reviews via GitHub Actions. When you open or update a PR, Claude will automatically review your changes and provide feedback.