// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {
//         login: "Dummy login name",
//         type: "Dummy type",
//         avatar_url: "Dummy URL",
//       },
//     };
//     // console.log(this.props.name + "Child Constructor");
//   }

//   async componentDidMount() {
//     const data = await fetch("https://api.github.com/users/nikhildevelop");
//     const json = await data.json();
//     this.setState({
//       userInfo: json,
//     });

//     // console.log(this.props.name + "Child componentDidMount");
//   }

//   componentDidUpdate() {
//     // console.log("component did update");
//   }

//   componentWillUnmount() {
//     // console.log("Component will Unmount");
//   }

//   render() {
//     const { login, type, avatar_url } = this.state.userInfo;

//     // console.log(this.props.name + "Child Render");

//     return (
//       <div className="user-card">
//         <h3>{login}</h3>
//         <h4>{type}</h4>
//         <img src={avatar_url} />
//         <h5>contact: personal email</h5>
//       </div>
//     );
//   }
// }

// export default UserClass;
