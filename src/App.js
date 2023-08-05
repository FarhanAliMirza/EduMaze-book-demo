import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-between titlepg">
        <h1 className="text-black font-bold p-10 text-3xl">Loreum Ipsum</h1>
        <form className="p-10">Entername</form>
        {/* button colour 545FD9 */}
      </div>
    </div>
  );
}

export default App;
