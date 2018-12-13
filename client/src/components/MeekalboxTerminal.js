import React from "react";
import Terminal from "react-console-emulator";
import { withRouter } from "react-router-dom";

class MeekalboxTerminal extends React.Component {
  state = {
    project: false
  };

  commands = {
    projects: {
      description: "Load Projects",
      usage: "projects",
      fn: () => {
        this.props.onProject();
        this.props.toggleTerminal();
      }
    },
    contact: {
      description: "Contact Mike",
      usage: "contact",
      fn: () => {
        this.props.onContact();
        this.props.toggleTerminal();
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="term">
          <Terminal
            commands={this.commands}
            welcomeMessage={
              'Welcome to meekalBox type "help" for available commands'
            }
            promptLabel={"me@meekalbox:~$"}
            autoFocus={true}
            contentClassName={"terminalBox"}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(MeekalboxTerminal);
