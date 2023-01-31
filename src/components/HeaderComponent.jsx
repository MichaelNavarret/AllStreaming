import React, { Component } from "react";

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>

        <header>
            <div className="navbar navbar-expand-md navbar-dark bg-dark text-center">
                <div>
                    <a href="/" className="navbar-brand ">All Streaming 🕮</a>
                </div>
            </div>
        </header>

    </div>;
  }
}

export default HeaderComponent;
