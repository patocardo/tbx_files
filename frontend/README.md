Welcome to the Files App
========================

This project is made with the aims of evaluating skills of the author

It loads small CSV files from an external API, and represent them in a UI

Architecture &amp; Technologies
-------------------------------

### Front End

 This application is built using the following technologies and architectural patterns:

- React 18 for building the user interface
- React Router for client-side navigation and routing
- Redux for state management
- Domain-Driven Design (DDD) for organizing the application structure
- React Bootstrap for styling and responsive design
 
### Back end

The application provides endpoints for fetching individual files, listing available files, and retrieving all files in a formatted JSON format.

The application uses several technologies, including:

 *ExpressJS for handling HTTP requests and routing* *Axios for making HTTP requests to the external API* *Mocha and Chai for unit testing* *StandardJS for code formatting and linting* 
Areas to Improve
----------------

 This application can be further improved in the following areas:

- Testing, including unit, integration, and end-to-end tests to ensure full coverage of the application's functionality
- Containering. Create the corresponding Dockerfile and build image and containers
- Typing. The practice doesn't allow typescript, and there aren't components in frontend with props to use PropTypes
- Performance testing and optimizations
- Progresive web app in front-end
- Increased accessibility and compliance with WCAG guidelines
- Implementing caching strategies for optimized data fetching
- Error handling. Including: 
    - logging system either for backend and front-end, that allows developer to track errors better
    - Error policy. What and how to communicate the user about errors, and what to insert in the logging system
- Improved documentation for easier onboarding and maintenance
 
Installation Process
--------------------

 To install and run the application, follow these steps:

1. Clone the repository to your local machine
2. Enter to both folders /backend and /frontend
3. Run `npm install` to install the required dependencies
4. Run `npm start` to start the development server in frontend
5. Run `node ./app.j` to start the development server in frontend
6. Visit `http://localhost:3000` in your browser to access the application