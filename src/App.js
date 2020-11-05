import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import HomeComponent from "./container/Home";
import AboutComponent from "./container/About";
import GalleryComponent from "./container/Gallery";
import NewsComponent from "./container/News";
import ServicesComponent from "./container/Services";
import ContactsComponent from "./container/About";
import Footer from "./component/Footer/Footer";
import "./App.css";
import "./assets/fontawesome/css/font-awesome.min.css";

function App() {
  useEffect(() => {
    console.log(
      `Thank you for showing interest to my project, you can find on my site @ https://brianoluoch.netlify.app or on my mobile @ +254795772333`
    );
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" exact component={AboutComponent} />
        <Route path="/services" exact component={ServicesComponent} />
        <Route path="/news" exact component={NewsComponent} />
        <Route path="/gallery" exact component={GalleryComponent} />
        <Route path="/contacts" exact component={ContactsComponent} />
        {/* <Route path="/contacts" component={ContactsComponent} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
