import "./App.scss";
import { useContext, useReducer, useEffect } from "react";
import Context from "./contexts/context";
import Reducer from "./reducers/reducer";
import { SearchField } from "./components/index";
import { Results } from "./components/index";

const SITE_TITLE = "Taco Finder";

function App() {
  // Initialize context
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(Reducer, initialState);
  // Set App title
  useEffect(() => {
    document.title = SITE_TITLE;
    return () => {};
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App container my-4">
        <header className="App-header">
          <span>- Hello, and Welcome! -</span>
          <h1>Taco Finder App</h1>
          <SearchField />
        </header>
        <hr />
        {state.search_results.length > 0 ? <Results /> : null}
      </div>
    </Context.Provider>
  );
}

export default App;
