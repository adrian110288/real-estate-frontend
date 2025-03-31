# Real Estate app

## Overview
Full-stack web application with user authentication, file uploads, database interactions, and a responsive UI.

![](https://github.com/adrian110288/real-estate-frontend/blob/master/screenshots/Screenshot%202025-03-31%20at%2020.08.46.png)
![](https://github.com/adrian110288/real-estate-frontend/blob/master/infra.png)
![](https://github.com/adrian110288/real-estate-frontend/blob/master/database-design.png)

## 🔧 Tech Stack
- **Frontend:** [Next.js](https://nextjs.org/) for server-side rendering, static site generation, and a seamless user experience.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for rapid UI development with a clean and modern look.
- **Authentication:** [AWS Cognito](https://aws.amazon.com/cognito/) for secure user authentication and authorization.
- **File Uploads:** [Molten](https://www.npmjs.com/package/molten) package for handling file uploads efficiently, storing them in **AWS S3**.
- **Database:** [PostgreSQL](https://www.postgresql.org/) for reliable and scalable relational data storage.
- **UI Components for Authentication:** [AWS Amplify UI](https://docs.amplify.aws/ui/) for pre-built UI components.

## 🎯 Features

- 🔐 Secure authentication with AWS Cognito
- 📂 File upload and storage using Molten and AWS S3
- 📊 Data persistence with a PostgreSQL database
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 📡 Real-time analytics using AWS Amplify UI
- 🚀 Optimized performance with Next.js' SSR & SSG


## Libraries
- filepond
- redux
- shadcn/ui
- react-hook-form
- zod
- tailwindv3
- amplify ui

## Tech 
- PostGIS

## Interesting practices
- add proviers.tsx file to add providers for all components in one place
- using JS computed propertty syntax for filtering e.g 
    const newFilters = { ...filters, [key]: newValue };
