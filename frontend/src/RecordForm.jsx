
// import React from 'react';

// const RecordForm = ({ newRecord, handleInputChange, handleAddRecord }) => {
//   return (
//     <div className="container my-4">
//       <h2>Add New Record</h2>
//       <div className="row">
//         {Object.keys(newRecord).map((key) => (
//           <div className="col-md-4 my-2" key={key}>
//             <input
//               className="form-control"
//               name={key}
//               placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//               value={newRecord[key]}
//               onChange={handleInputChange}
//             />
//           </div>
//         ))}
//       </div>
//       <button className="btn btn-success my-2" onClick={handleAddRecord}>Add Record</button>
//     </div>
//   );
// };

// export default RecordForm;
import React from 'react';

const RecordForm = ({ newRecord, handleInputChange, handleAddRecord }) => {
  return (
    <div className="container my-4">
      <h2>Add New Record</h2>
      <div className="row">
        {Object.keys(newRecord).map((key) => (
          <div className="col-md-4 my-2" key={key}>
            <input
              className="form-control"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={newRecord[key]}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-success my-2" onClick={handleAddRecord}>Add Record</button>
    </div>
  );
};

export default RecordForm;
