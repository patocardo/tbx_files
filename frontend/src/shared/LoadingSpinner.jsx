import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = () => (
  <Container className="text-center" role="alert" aria-busy="true">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Container>
)

export default LoadingSpinner;