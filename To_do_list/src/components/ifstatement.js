import React from 'react';

class Statement extends React.Component {


  render() {
    const isLoggedIn = this.props.isLoggedIn;

    if (isLoggedIn) {
      return <p>Welcome, User!</p>;
    } else {
      return <p>Please log in.</p>;
    }
  }
}


// function ExampleStatement(props) {
//   const isLoggedIn = props.isLoggedIn;

//   return (
//     <div>
//       {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
//     </div>
//   );
// }

export default Statement;
// export default ExampleStatement;