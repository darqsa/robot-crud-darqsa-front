import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppContainerStyled } from "./AppStyled";
import CardList from "./components/CardList/CardList";
import NewRobot from "./components/Form/Form";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { User } from "./features/users/models/User";
import { loginUserAction } from "./features/users/slices/usersSlice";
import fetchToken from "./utils/auth";

const App = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  if (token) {
    const user = fetchToken(token);
    dispatch<PayloadAction<User>>(loginUserAction(user));
  }

  return (
    <>
      <AppContainerStyled>
        <Login />
        <Register />
        <NewRobot />
        <CardList />
      </AppContainerStyled>
    </>
  );
};

export default App;
