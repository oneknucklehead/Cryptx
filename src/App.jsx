import { useSearchParams } from "react-router-dom";
import "./App.css";
import Container from "./components/Container.jsx";
import Layout from "./components/Layout.jsx";
import Navbar from "./components/Navbar.jsx";
import GraphSection from "./sections/GraphSection.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
  },
]);
function App() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return (
    // <>
    //   <Navbar />
    //   <Container>
    //     <Layout>
    //       <GraphSection />
    //     </Layout>
    //   </Container>
    // </>
    <RouterProvider router={router} />

  );
}

export default App;
