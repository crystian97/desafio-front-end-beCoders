import Home from "./pages/Home";
import { GlobalStyles } from "./styles/globalStyles";
import "./index.css";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppRoutes />
    </div>
  );
}

export default App;
