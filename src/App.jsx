import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Dashborad from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cobins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index replace to='dashboard' />
            <Route path='dashboard' element={<Dashborad />} />
            <Route path='booking' element={<Bookings />} />
            <Route path='cobin' element={<Cobins />} />
            <Route path='user' element={<Users />} />
            <Route path='setting' element={<Settings />} />
            <Route path='account' element={<Account />} />
          </Route>
          
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
