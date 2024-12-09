Infrrd Employee Management Task


Table of Contents

Overview

Project Structure

Setup and Installation

Scripts

Development Workflow

Technologies Used

Folder Structure

Contributing

License

Overview

This is an Angular project designed to manage employee data with various components like employee cards, search panel, filter panel, notifications, and more. It includes structured services, utilities, and component-based architecture for scalability and maintainability.

Project Structure

├─ .gitignore
├─ angular.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ App.tsx
│  ├─ app
│  │  ├─ app.component.html
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ components
│  │  │  ├─ employee-card
│  │  │  │  ├─ employee-card.component.html
│  │  │  │  ├─ employee-card.component.scss
│  │  │  │  └─ employee-card.component.ts
│  │  │  ├─ employee-list
│  │  │  │  ├─ employee-list.component.html
│  │  │  │  ├─ employee-list.component.scss
│  │  │  │  └─ employee-list.component.ts
│  │  │  ├─ filter-panel
│  │  │  │  ├─ filter-panel.component.html
│  │  │  │  ├─ filter-panel.component.scss
│  │  │  │  ├─ filter-panel.component.spec.ts
│  │  │  │  └─ filter-panel.component.ts
│  │  │  ├─ header
│  │  │  │  ├─ header.component.html
│  │  │  │  ├─ header.component.scss
│  │  │  │  └─ header.component.ts
│  │  │  ├─ notification-popup
│  │  │  │  ├─ notification-popup.component.html
│  │  │  │  ├─ notification-popup.component.scss
│  │  │  │  └─ notification-popup.component.ts
│  │  │  ├─ rating-display
│  │  │  │  ├─ rating-display.component.html
│  │  │  │  ├─ rating-display.component.scss
│  │  │  │  ├─ rating-display.component.spec.ts
│  │  │  │  └─ rating-display.component.ts
│  │  │  ├─ results-header
│  │  │  │  ├─ results-header.component.html
│  │  │  │  ├─ results-header.component.scss
│  │  │  │  └─ results-header.component.ts
│  │  │  ├─ search-panel
│  │  │  │  ├─ search-panel.component.html
│  │  │  │  ├─ search-panel.component.scss
│  │  │  │  └─ search-panel.component.ts
│  │  │  └─ sidebar
│  │  │     ├─ sidebar.component.html
│  │  │     ├─ sidebar.component.scss
│  │  │     └─ sidebar.component.ts
│  │  ├─ data
│  │  │  └─ employees.ts
│  │  ├─ services
│  │  │  └─ employee.service.ts
│  │  ├─ types
│  │  │  ├─ employee.ts
│  │  │  └─ filters.ts
│  │  └─ utils
│  │     └─ filter-employees.ts
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ index.css
│  ├─ index.html
│  ├─ main.ts
│  ├─ polyfills.ts
│  ├─ styles.scss
│  └─ utils
│     └─ filterEmployees.ts
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.node.json

Setup and Installation

Clone the repository:

git clone <repository-url>
cd <project-directory>

Install dependencies:

npm install

Start the development server:

ng serve

The application will be accessible at http://localhost:4200.

Scripts

Start Development Server:

ng serve

Build Production:

ng build --configuration=production

Run Tests:

ng test

Lint the Code:

ng lint

Development Workflow

Add New Components:
Use Angular CLI to generate new components.

ng generate component <component-name>

Service Management:
Place all reusable logic and API calls in services located in src/app/services.

Types and Interfaces:
Define TypeScript interfaces in src/app/types.

Environment Configurations:
Manage environment-specific configurations in src/environments.

Technologies Used

Framework: Angular

Styling: SCSS, Tailwind CSS

Utility Libraries: PostCSS

TypeScript: Strongly typed language support

Folder Structure

Key Folders:

src/app/components: Contains all reusable UI components.

src/app/services: Includes services for API calls and business logic.

src/app/types: TypeScript interfaces and type definitions.

src/app/utils: Utility functions for shared logic.

src/environments: Environment-specific configurations.

Example:

Employee Card Component:

HTML: src/app/components/employee-card/employee-card.component.html

SCSS: src/app/components/employee-card/employee-card.component.scss

Logic: src/app/components/employee-card/employee-card.component.ts

