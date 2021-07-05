import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const methodImp = () => {
    console.log("Hello");
  };

  const debounce = (fn, delay) => {
    let timeoutId;
    let context = this;
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn.apply(context);
      }, delay);
    };
  };

  const handleOnClick = debounce(methodImp, 300);

  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click Me" onClick={handleOnClick} />
      </header>
    </div>
  );
}

export default App;
