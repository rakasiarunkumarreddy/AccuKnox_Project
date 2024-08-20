// import React, { useState } from 'react';
// import '../App.css';

// const AddWidgetForm = ({ categoryName, addWidget }) => {
//   const [name, setName] = useState('');
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newWidget = { id: Date.now(), name, text };
//     addWidget(categoryName, newWidget);
//     setName('');
//     setText('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Widget Name" required />
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Widget Text" required />
//       <button type="submit">Add Widget</button>
//     </form>
//   );
// };

// export default AddWidgetForm;








// import React, { useState } from 'react';

// const AddWidgetForm = ({ categoryName, addWidget }) => {
//   const [name, setName] = useState('');
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newWidget = { id: Date.now(), name, text };
//     addWidget(categoryName, newWidget);
//     setName('');
//     setText('');
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column'
//   };

//   const inputStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     marginBottom: '10px',
//     padding: '8px'
//   };

//   const buttonStyle = {
//     backgroundColor: '#28a745',
//     border: 'none',
//     borderRadius: '4px',
//     color: '#fff',
//     cursor: 'pointer',
//     padding: '10px'
//   };

//   return (
//     <form onSubmit={handleSubmit} style={formStyle}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Widget Name" required style={inputStyle} />
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Widget Text" required style={inputStyle} />
//       <button type="submit" style={buttonStyle}>Add Widget</button>
//     </form>
//   );
// };

// export default AddWidgetForm;







import React, { useState } from 'react';

const AddWidgetForm = ({ categoryName, addWidget }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = { id: Date.now(), name, text };
    addWidget(categoryName, newWidget);
    setName('');
    setText('');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '8px'
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    padding: '10px'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Widget Name" required style={inputStyle} />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Widget Text" required style={inputStyle} />
      <button type="submit" style={buttonStyle}>Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;

