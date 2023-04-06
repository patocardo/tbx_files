import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to the Files App</h1>
          <p>This project is made with the aims of evaluating skills of the author</p>
          <p>It loads small CSV files from an external API, and represent them in a UI</p>
          <h2>Architecture & Technologies</h2>
          <h3>Front End</h3>
          <p>
            This application is built using the following technologies and architectural patterns:
          </p>
          <ul>
            <li>React 18 for building the user interface</li>
            <li>React Router for client-side navigation and routing</li>
            <li>Redux for state management</li>
            <li>Domain-Driven Design (DDD) for organizing the application structure</li>
            <li>React Bootstrap for styling and responsive design</li>
          </ul>
          <h3>Back end</h3>
          <p>The application provides endpoints for fetching individual files, listing available files, and retrieving all files in a formatted JSON format.</p>
          <p>The application uses several technologies, including:</p>
          <ul>
            <i>ExpressJS for handling HTTP requests and routing</i>
            <i>Axios for making HTTP requests to the external API</i>
            <i>Mocha and Chai for unit testing</i>
            <i>StandardJS for code formatting and linting</i>
          </ul>
          <h2>Areas to Improve</h2>
          <p>
            This application can be further improved in the following areas:
          </p>
          <ul>
            <li>Testing, including unit, integration, and end-to-end tests to ensure full coverage of the application's functionality</li>
            <li>Containering. Create the corresponding Dockerfile and build image and containers</li>
            <li>Typing. The practice doesn't allow typescript, and there aren't components in frontend with props to use PropTypes</li>
            <li>Performance testing and optimizations</li>
            <li>Progresive web app in front-end</li>
            <li>Increased accessibility and compliance with WCAG guidelines</li>
            <li>Implementing caching strategies for optimized data fetching</li>
            <li>Error handling. Including:
              <ul>
                <li>logging system either for backend and front-end, that allows developer to track errors better</li>
                <li>Error policy. What and how to communicate the user about errors, and what to insert in the logging system</li>
              </ul> </li>
            <li>Improved documentation for easier onboarding and maintenance</li>
          </ul>

          <h2>Installation Process</h2>
          <p>
            To install and run the application, follow these steps:
          </p>
          <ol>
            <li>Clone the repository to your local machine</li>
            <li>Enter to both folders /backend and /frontend</li>
            <li>Run <code>npm install</code> to install the required dependencies</li>
            <li>Run <code>npm start</code> to start the development server in frontend</li>
            <li>Run <code>node ./app.j</code> to start the development server in frontend</li>
            <li>Visit <code>http://localhost:3000</code> in your browser to access the application</li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
