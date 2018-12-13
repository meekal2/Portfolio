import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import "./App.css";
import MeekalboxTerminal from "./components/MeekalboxTerminal";
import Projects from "./components/Projects";
import termlogo from "./images/termlogo.png";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    showTermBtn: false,
    termState: false,
    project: false,
    contact: false
  };

  toggleTerminal = () => {
    if (this.state.project) {
      this.setState({ project: false });
    } else if (this.state.contact) {
      this.setState({ contact: false });
    }
    this.setState({
      termState: !this.state.termState,
      showTermBtn: !this.state.showTermBtn
    });
  };

  onProject = () => {
    this.setState({ project: true });
  };
  onContact = () => {
    this.setState({ contact: true });
  };
  render() {
    return (
      <div className="App">
        {this.state.showTermBtn ? (
          <img
            alt="terminal logo"
            src={termlogo}
            width="110px"
            className="termLogo"
            onClick={this.toggleTerminal}
          />
        ) : null}
        {!this.state.termState ? (
          <MeekalboxTerminal
            termState={this.state.termState}
            toggleTerminal={this.toggleTerminal}
            showTermBtn={this.state.showTermBtn}
            onProject={this.onProject}
            onContact={this.onContact}
          />
        ) : null}
        {this.state.project ? <Projects /> : null}
        {this.state.contact ? <Contact /> : null}
        <Route path={"/contact"} component={Contact} />
        <Route path={"/projects"} component={Projects} />
      </div>
    );
  }
}

export default withRouter(App);
