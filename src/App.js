import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './layouts/dashboard.layout';
import Company from './pages/company';
import CompanyDetails from './pages/company-details';
import Contact from './pages/contact';
import Home from './pages/home';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />}/>
          <Route path="companies" element={<Company />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="companies/:id" element={<CompanyDetails />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
