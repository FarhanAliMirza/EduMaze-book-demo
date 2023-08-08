import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="titlepg">
      <Header />
      <div className="flex justify-around py-10">
        <h1 className="text-black font-bold p-10 text-3xl">Loreum Ipsum</h1>
        <InputForm />
      </div>
    </div>
  );
}

export default App;
