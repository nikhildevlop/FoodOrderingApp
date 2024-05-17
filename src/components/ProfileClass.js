import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileName: "Dummy Name",
      profileEmail: "Dummy Email",
    };
    this.state = {
      location: "Dummy location",
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Interval");
    }, 1000);
    this.setState({
      profileName: this.props.profileName,
      profileEmail: this.props.profileEmail,
      location: this.props.location,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h4>{this.state.profileName}</h4>
        <h5>{this.state.profileEmail}</h5>
        <h6>{this.state.location}</h6>
      </div>
    );
  }
}

export default ProfileClass;
