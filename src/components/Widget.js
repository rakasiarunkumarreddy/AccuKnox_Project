// import React from 'react';
// import '../App.css';


// const Widget = ({ widget, removeWidget }) => (
//   <div>
//     <h3>{widget.name}</h3>
//     <p>{widget.text}</p>
//     <button onClick={removeWidget}>Remove</button>
//   </div>
// );

// export default Widget;









// import React from 'react';

// const Widget = ({ widget, removeWidget }) => {
//   const widgetStyle = {
//     backgroundColor: '#e9ecef',
//     borderRadius: '8px',
//     marginBottom: '10px',
//     padding: '10px',
//     position: 'relative'
//   };

//   const widgetTitleStyle = {
//     margin: '0',
//     fontSize: '1.2em'
//   };

//   const widgetTextStyle = {
//     margin: '5px 0'
//   };

//   const buttonStyle = {
//     backgroundColor: '#dc3545',
//     border: 'none',
//     borderRadius: '50%',
//     color: '#fff',
//     cursor: 'pointer',
//     fontSize: '0.8em',
//     height: '20px',
//     position: 'absolute',
//     right: '10px',
//     top: '10px',
//     width: '20px'
//   };

//   return (
//     <div style={widgetStyle}>
//       <h3 style={widgetTitleStyle}>{widget.name}</h3>
//       <p style={widgetTextStyle}>{widget.text}</p>
//       <button style={buttonStyle} onClick={removeWidget}>×</button>
//     </div>
//   );
// };

// export default Widget;







import React from 'react';

const Widget = ({ widget, removeWidget }) => {
  const widgetStyle = {
    backgroundColor: '#e9ecef',
    borderRadius: '8px',
    marginBottom: '10px',
    padding: '10px',
    position: 'relative'
  };

  const widgetTitleStyle = {
    margin: '0',
    fontSize: '1.2em'
  };

  const widgetTextStyle = {
    margin: '5px 0'
  };

  const buttonStyle = {
    backgroundColor: '#dc3545',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8em',
    height: '20px',
    position: 'absolute',
    right: '10px',
    top: '10px',
    width: '20px'
  };

  return (
    <div style={widgetStyle}>
      <h3 style={widgetTitleStyle}>{widget.name}</h3>
      <p style={widgetTextStyle}>{widget.text}</p>
      <button style={buttonStyle} onClick={removeWidget}>×</button>
    </div>
  );
};

export default Widget;

