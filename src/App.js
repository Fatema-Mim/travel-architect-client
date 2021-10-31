import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AddPackage from './component/AddPackage/AddPackage';
import PackageOrder from './component/PackageOrder/PackageOrder';
import AllOrder from './component/AllOrder/AllOrder';
import UserOrders from './component/UserOrders/UserOrders';
import Footer from './component/Footer/Footer';
import NoFound from './component/NoFound/NoFound';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/packages/:packageId">
              <PackageOrder></PackageOrder>
            </PrivateRoute>
            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>
            <PrivateRoute path="/allOrder">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute path="/userOrder">
              <UserOrders></UserOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NoFound></NoFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
