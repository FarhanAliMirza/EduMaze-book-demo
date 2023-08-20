import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Card2 from "./components/Card2";

function App() {
  return (
    <div>
      <div className="coloredbg">
        <Header />
        <Hero />
      </div>
      <div className="grid grid-flow-row">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-black font-bold text-4xl sm:text-6xl pt-8">
            Our Learning Programs
          </h1>
          <p className="text-gray-500 text-lg pt-1">
            Get courses tailored to you
          </p>
        </div>
        <Card
          heading="Hello World"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat."
          image="https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg"
        />
        <Card2
          heading="Hello World2"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat."
          image="https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg"
        />
      </div>
    </div>
  );
}

export default App;
