Welcome to the Files App
========================

This project is made with the aims of evaluating skills of the author

It loads small CSV files from an external API, and represent them in a UI

Instructions
------------

### Installation Process

[x] A terminal must be opened

1. Clone the repository to your local machine
2. Enter to /backend
3. Run `npm install`
4. Enter to /frontend
5. Run `npm install`

### Running process

[x] Local ports 3000 and 3001 must be available
[x] Installation process must be completed
[x] Two terminals must be opened

1. Focus on the first terminal
2. Enter to /backend
3. Run `node ./app.j`
4. Focus on the second terminal
5. Enter to /frontend
6. Run `npm start` 
7. Visit `http://localhost:3000` in your browser to access the application

### Testing process

[x] Local ports 3000 and 3001 must be available
[x] A terminal must be opened

1. Enter to /backend
2. Run `node test`
3. Type *Ctrl+C* to stop the test
4. Enter to /frontend
5. Run `npm test` 

Architecture &amp; Technologies
-------------------------------

### Front End

 This application is built using the following technologies and architectural patterns:

- React 18 for building the user interface
- React Router for client-side navigation and routing
- Redux for state management, with Thunk for asynchronic actions
- React Bootstrap for styling and responsive design
- Domain-Driven Design (DDD) for organizing the application structure
 
### Back end

The application provides endpoints for fetching individual files, listing available files, and retrieving all files in JSON format.

The application uses several technologies, including:

 * ExpressJS for handling HTTP requests and routing
 * Axios for making HTTP requests to the external API
 * Jest, Mocha and Chai for unit testing
 * StandardJS for code formatting and linting

Areas to Improve
----------------

 This application can be further improved in the following areas:

- More Testing, including unit, integration, and end-to-end tests to ensure full coverage of the application's functionality
- Implementation of Docker for both folders. *This implementation was started, but there were failures in the machine.*
- Typing. The practice doesn't allow typescript, and there aren't components in frontend with props to use PropTypes
- Performance testing and optimizations
- Progresive web app in front-end, and other practices to improve offline experience
- Increased accessibility and compliance with WCAG guidelines
- Implementing caching strategies for optimized data fetching
- Error handling. Including: 
    - logging system either for backend and front-end, that allows developer to track errors better
    - Error policy. What and how to communicate the user about errors, and what to insert in the logging system
- Improved documentation for easier onboarding and maintenance
 