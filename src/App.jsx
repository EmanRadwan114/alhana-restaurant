import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound.jsx";
import About from "./pages/About/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MealsContextProvider from "./context/MealsContext.jsx";
import GlobalContextProvider from "./context/GlobalContext.jsx";
import AllMeals from "./pages/AllMeals/AllMeals.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

const theme = createTheme({
  typography: {
    fontFamily: "cursive", // Custom font family
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        { path: "meals", element: <AllMeals></AllMeals> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);
  return (
    <>
      <GlobalContextProvider>
        <MealsContextProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </MealsContextProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
