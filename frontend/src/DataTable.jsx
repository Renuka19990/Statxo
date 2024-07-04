import React from 'react';

const DataTable = ({ data, handleUpdate, role }) => {
  return (
    <div className="container my-4">
      <h2>Data Table</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Posting Year</th>
            <th>Posting Month</th>
            <th>Action Type</th>
            <th>Action Number</th>
            <th>Action Name</th>
            <th>Status</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.id}</td>
              <td>{item.quantity}</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.amount}
                  onChange={(e) => handleUpdate(item._id, 'amount', e.target.value)}
                />
              </td>
              <td>{item.postingYear}</td>
              <td>{item.postingMonth}</td>
              <td>
                <select
                  className="form-control"
                  value={item.actionType}
                  onChange={(e) => handleUpdate(item._id, 'actionType', e.target.value)}
                >
                  <option value="Type1">Type1</option>
                  <option value="Type2">Type2</option>
                  <option value="Type3">Type3</option>
                </select>
              </td>
              <td>{item.actionNumber}</td>
              <td>
                <select
                  className="form-control"
                  value={item.actionName}
                  onChange={(e) => handleUpdate(item._id, 'actionName', e.target.value)}
                >
                  <option value="Action1">Action1</option>
                  <option value="Action2">Action2</option>
                  <option value="Action3">Action3</option>
                </select>
              </td>
              <td>
                {role === 'admin' ? (
                  <select
                    className="form-control"
                    value={item.status}
                    onChange={(e) => handleUpdate(item._id, 'status', e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Approved">Approved</option>
                  </select>
                ) : (
                  item.status
                )}
              </td>
              <td>{item.Impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
