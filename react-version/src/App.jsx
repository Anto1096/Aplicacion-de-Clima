import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
