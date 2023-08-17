
import './App.css';
import { LoginPage } from './pages/Login/main';
import { Routes, Route } from "react-router-dom";
import { RegisterPage } from './pages/Registration/main';
import { HomePage } from './pages/Home Page/main';
import { AnalyticsPage } from './pages/Analytics/main';
import { SpreadsheetPage } from './pages/Spreadsheet/main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/registration' element={<RegisterPage />} />
      <Route path='/Home_page' element = {<HomePage/>} />
      <Route path='/Home_page/:id/ANALYTICS' element = {<AnalyticsPage/>} />
      <Route path='/Home_page/:id/Spreadsheet' element = {<SpreadsheetPage/>} />
    </Routes>
  );
}

export default App;
