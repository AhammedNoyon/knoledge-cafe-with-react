import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <Header></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
