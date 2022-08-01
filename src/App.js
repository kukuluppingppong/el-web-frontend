import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";

function App() {

  return (
    <Layout>
      <Container style={{ minHeight: "80vh" }}>회원관리</Container>
    </Layout>
  );
}

export default App;
