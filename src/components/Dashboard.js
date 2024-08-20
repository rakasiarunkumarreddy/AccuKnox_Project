// import React, { useState } from 'react';
// import Widget from './Widget';
// import AddWidgetForm from './AddWidgetForm';
// import data from '../data.json';
// import '../App.css';


// const Dashboard = () => {
//   const [categories, setCategories] = useState(data.categories);

//   const addWidget = (categoryName, widget) => {
//     setCategories(categories.map(category => 
//       category.name === categoryName 
//         ? { ...category, widgets: [...category.widgets, widget] }
//         : category
//     ));
//   };

//   const removeWidget = (categoryName, widgetId) => {
//     setCategories(categories.map(category => 
//       category.name === categoryName 
//         ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
//         : category
//     ));
//   };

//   return (
//     <div>
//       {categories.map(category => (
//         <div key={category.name}>
//           <h2 >{category.name}</h2>
//           {category.widgets.map(widget => (
//             <Widget key={widget.id} widget={widget} removeWidget={() => removeWidget(category.name, widget.id)} />
//           ))}
//           <AddWidgetForm categoryName={category.name} addWidget={addWidget} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;







// import React, { useState } from 'react';
// import Widget from './Widget';
// import AddWidgetForm from './AddWidgetForm';
// import data from '../data.json';

// const Dashboard = () => {
//   const [categories, setCategories] = useState(data.categories);

//   const addWidget = (categoryName, widget) => {
//     setCategories(categories.map(category => 
//       category.name === categoryName 
//         ? { ...category, widgets: [...category.widgets, widget] }
//         : category
//     ));
//   };

//   const removeWidget = (categoryName, widgetId) => {
//     setCategories(categories.map(category => 
//       category.name === categoryName 
//         ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
//         : category
//     ));
//   };

//   const dashboardStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     padding: '20px'
//   };

//   const categoryStyle = {
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     margin: '20px',
//     padding: '20px',
//     width: '300px'
//   };

//   const categoryTitleStyle = {
//     color: '#007bff',
//     fontSize: '1.5em',
//     marginBottom: '10px'
//   };

//   return (
//     <div style={dashboardStyle}>
//       {categories.map(category => (
//         <div key={category.name} style={categoryStyle}>
//           <h2 style={categoryTitleStyle}>{category.name}</h2>
//           {category.widgets.map(widget => (
//             <Widget key={widget.id} widget={widget} removeWidget={() => removeWidget(category.name, widget.id)} />
//           ))}
//           <AddWidgetForm categoryName={category.name} addWidget={addWidget} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;





import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import data from '../data.json';

const Dashboard = () => {
  const [categories, setCategories] = useState(data.categories);

  const addWidget = (categoryName, widget) => {
    setCategories(categories.map(category => 
      category.name === categoryName 
        ? { ...category, widgets: [...category.widgets, widget] }
        : category
    ));
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(categories.map(category => 
      category.name === categoryName 
        ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
        : category
    ));
  };

  const dashboardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px'
  };

  const categoryStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    padding: '20px',
    width: '300px'
  };

  const categoryTitleStyle = {
    color: '#007bff',
    fontSize: '1.5em',
    marginBottom: '10px'
  };

  return (
    <div style={dashboardStyle}>
      {categories.map(category => (
        <div key={category.name} style={categoryStyle}>
          <h2 style={categoryTitleStyle}>{category.name}</h2>
          {category.widgets.map(widget => (
            <Widget key={widget.id} widget={widget} removeWidget={() => removeWidget(category.name, widget.id)} />
          ))}
          <AddWidgetForm categoryName={category.name} addWidget={addWidget} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
