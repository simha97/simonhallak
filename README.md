# Overview

This repository contains the source code for my portfolio web application designed to showcase my projects. Built using Vue 3 with the Composition API and integrated with Supabase for backend services, the app allows users to browse projects categorized by areas of expertise.

---

# Visit the website on:
https://simonhallak.vercel.app/


## Tech Stack
### Frontend
- **Vue 3** with **Composition API**: For building a reactive, component-based UI.
- **NuxtLink**: For seamless navigation between pages.
- **Bootstrap**: For styled and responsive layouts.

### Backend
- **Supabase**: Provides backend services, including a database for storing project information and a real-time API for fetching data.

---


## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** (or **yarn**)

### Installation
1. Clone the repository
   
   
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Configure environment variables:
   Create a \`.env\` file in the root directory with the following variables:
   \`\`\`env
   VITE_SUPABASE_URL=<Your Supabase URL>
   VITE_SUPABASE_KEY=<Your Supabase Key>
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

The app will be accessible at \`http://localhost:3000\`.
