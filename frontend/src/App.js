import './App.css';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route } from "react-router-dom";
// localStorage.clear();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;