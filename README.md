# Lyric Challenge

A modern web application built with Next.js that allows users to explore and discover music bands. The application features a responsive dashboard with filtering capabilities, search functionality, and a dynamic sidebar.

## Table of Contents

- [Lyric Challenge](#lyric-challenge)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running the Application](#running-the-application)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
  - [Tech Stack](#tech-stack)

## Overview

Lyric Challenge is a Next.js application that provides a modern interface for exploring music bands. The application includes features such as:
- Responsive dashboard layout
- Band filtering by genres
- Real-time search functionality
- Dynamic sidebar navigation
- Modern UI with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- Git

## Setup

1. Clone the repository:
```bash
git clone git@github.com:jeison-fox/lyric-challenge.git
cd lyric-challenge
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npm run start` - Runs the built application in production mode
- `npm run lint` - Runs ESLint to check for code issues
- `npm run format` - Formats code using Prettier

## Project Structure

```
src/
├── _components/    # Reusable UI components
├── _types/         # TypeScript type definitions
├── _utils/         # Utility functions
├── app/            # Next.js app directory
├── _styles/        # Global styles and Tailwind configuration
└── _mocks/         # Mock data for development
```

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
