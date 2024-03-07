import "./App.css";
import Container from "./components/Container.jsx";
import Layout from "./components/Layout.jsx";
import Navbar from "./components/Navbar.jsx";
import GraphSection from "./sections/GraphSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* LAYOUT */}
      <Container>
        <Layout>
          <GraphSection />
        </Layout>
      </Container>
    </>
  );
}

export default App;
