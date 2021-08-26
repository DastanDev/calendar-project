import React from "react"
import Home from "./containers/Home"
import Footer from "./containers/Footer"
import Login from "./containers/Login"
import Register from "./containers/Register"
import Terms from "./containers/TermsPage"
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import i18n from "i18next"
import { I18nextProvider } from "react-i18next"
import es from "./common/translations/es.json"
import en from "./common/translations/en.json"
import Navbar from "./components/Navbar"
import Dashboard from "./screens/dashboard/index"
import UserProvider from "./contexts/UserContext"

i18n.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: en, // 'common' is our custom namespace
    },
    es: {
      common: es,
    },
  },
})

function App() {
  return (
    <UserProvider>
      <I18nextProvider i18n={i18n}>
        <div className="App cyan-skin">
          <BrowserRouter>
            <Switch>
              <React.Fragment>
                <link
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                  rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="true"
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;300&display=swap"
                  rel="stylesheet"
                />

                <Navbar className="sticky top-0 z-20" />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/terms" component={Terms} />
                <Route path="/dashboard" component={Dashboard} />
                <Footer />
              </React.Fragment>
            </Switch>
          </BrowserRouter>
        </div>
      </I18nextProvider>
    </UserProvider>
  )
}

export default App
