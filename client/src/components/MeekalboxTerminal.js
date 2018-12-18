import React from "react";
import Terminal from "react-console-emulator";
import { withRouter } from "react-router-dom";
import { sendMessage } from "../server";
const $ = window.jQuery;

class MeekalboxTerminal extends React.Component {
  state = {
    project: false,
    messages: ""
  };
  terminal = React.createRef();
  componentDidMount = () => {
    var twilioHubProxy = $.connection.twilioHub;
    twilioHubProxy.client.newMessage = messages => {
      const theMessage = messages;
      this.setState({ messages: theMessage });
    };
    $.connection.hub.url =
      "http://portfolioapi-prod.us-west-1.elasticbeanstalk.com/signalr";
    $.connection.hub.start().done(function() {});
  };
  componentDidUpdate() {
    this.pushMessageToTerm();
  }
  commands = {
    projects: {
      description: "Loads Projects Page",
      usage: "type projects",
      fn: () => {
        this.props.onProject();
        this.props.toggleTerminal();
      }
    },
    contact: {
      description: "Contact Mike",
      usage: "type contact",
      fn: () => {
        this.props.onContact();
        this.props.toggleTerminal();
      }
    },
    sendmessage: {
      description: "Send Mike a message",
      usage: "type sendmessage <message>",
      fn: (...msg) => {
        const req = { msg: msg.join(" ") };
        console.log(this.state.msg);
        sendMessage(req);
      }
    }
  };
  pushMessageToTerm = () => {
    const terminal = this.terminal.current;
    terminal.pushToStdout("Mike: " + this.state.messages);
    console.log(this.state.messages);
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
            ref={this.terminal}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(MeekalboxTerminal);
