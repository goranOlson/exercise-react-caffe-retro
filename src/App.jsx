
import Header from "./components/Header.jsx";
import SectionHot from "./components/SectionHot.jsx";
import SectionJuicy from "./components/SectionJuicy.jsx";
import SectionCosy from "./components/SectionCosy.jsx";

export function App() {
  return (
    <>
      {/* <h1>This is the App Component</h1> */}
    <SectionHot/>
    <SectionJuicy/>
    <SectionCosy/>
    <Header/>
    </>
  );
}

export default App;