
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImpactChart from './ImpactChart';
// import Login from './Login';
// import RecordForm from './RecordForm';
// import DataTable from './DataTable';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newRecord, setNewRecord] = useState({
//     id: '',
//     quantity: '',
//     amount: '',
//     postingYear: new Date().getFullYear(),
//     postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//     actionType: '',
//     actionNumber: '',
//     actionName: '',
//     status: 'Pending',
//     Impact: '',
//   });
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const result = await axios.get('http://localhost:5000/data', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(result.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       if (error.response && error.response.status === 403) {
//         setRole(null);
//         setToken('');
//         localStorage.removeItem('token');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecord({ ...newRecord, [name]: value });
//   };

//   const validateForm = () => {
//     for (let key in newRecord) {
//       if (newRecord[key] === '' || newRecord[key] === null) {
//         setError(`Please fill in the ${key} field.`);
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleAddRecord = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
//     if (isNaN(recordToAdd.id)) {
//       setError('ID must be a number.');
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/data', recordToAdd, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData([...data, result.data]);
//       setNewRecord({
//         id: '',
//         quantity: '',
//         amount: '',
//         postingYear: new Date().getFullYear(),
//         postingMonth: new Date().toLocaleString('default', { month: 'long' }),
//         actionType: '',
//         actionNumber: '',
//         actionName: '',
//         status: 'Pending',
//         Impact: '',
//       });
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('Failed to add record. Please try again.');
//     }
//   };

//   const handleUpdate = async (id, field, value) => {
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, [field]: value } : item
//     );
//     setData(updatedData);
//     try {
//       await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Failed to update record. Please try again.');
//     }
//   };

//   const handleSaveAll = async () => {
//     try {
//       await axios.put('http://localhost:5000/data', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Error saving all records:', error);
//       setError('Failed to save all records. Please try again.');
//     }
//   };

//   const handleRoleChange = (newRole, newToken) => {
//     setRole(newRole);
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   if (!role) {
//     return <Login setRole={handleRoleChange} />;
//   }

//   return (
//     <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <DataTable data={data} handleUpdate={handleUpdate} role={role} />
//       <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
//       <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
//       <ImpactChart data={data} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImpactChart from './ImpactChart';
import Login from './Login';
import RecordForm from './RecordForm';
import DataTable from './DataTable';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [newRecord, setNewRecord] = useState({
    id: '',
    quantity: '',
    amount: '',
    postingYear: new Date().getFullYear(),
    postingMonth: new Date().toLocaleString('default', { month: 'long' }),
    actionType: '',
    actionNumber: '',
    actionName: '',
    status: 'Pending',
    Impact: '',
  });
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
      fetchData();
    } else {
      setRole(null);
    }
  }, [token]);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/data', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response && error.response.status === 403) {
        setRole(null);
        setToken('');
        localStorage.removeItem('token');
        setError('Session expired. Please log in again.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  const validateForm = () => {
    for (let key in newRecord) {
      if (newRecord[key] === '' || newRecord[key] === null) {
        setError(`Please fill in the ${key} field.`);
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleAddRecord = async () => {
    if (!validateForm()) {
      return;
    }

    const recordToAdd = { ...newRecord, id: Number(newRecord.id) };
    if (isNaN(recordToAdd.id)) {
      setError('ID must be a number.');
      return;
    }

    try {
      const result = await axios.post('http://localhost:5000/data', recordToAdd, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData([...data, result.data]);
      setNewRecord({
        id: '',
        quantity: '',
        amount: '',
        postingYear: new Date().getFullYear(),
        postingMonth: new Date().toLocaleString('default', { month: 'long' }),
        actionType: '',
        actionNumber: '',
        actionName: '',
        status: 'Pending',
        Impact: '',
      });
    } catch (error) {
      console.error('Error adding record:', error);
      setError('Failed to add record. Please try again.');
    }
  };

  const handleUpdate = async (id, field, value) => {
    const updatedData = data.map(item =>
      item._id === id ? { ...item, [field]: value } : item
    );
    setData(updatedData);
    try {
      await axios.put(`http://localhost:5000/data/${id}`, { [field]: value }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Error updating record:', error);
      setError('Failed to update record. Please try again.');
    }
  };

  const handleSaveAll = async () => {
    try {
      await axios.put('http://localhost:5000/data', data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (error) {
      console.error('Error saving all records:', error);
      setError('Failed to save all records. Please try again.');
    }
  };

  const handleRoleChange = (newRole, newToken) => {
    setRole(newRole);
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  if (!role) {
    return <Login setRole={handleRoleChange} />;
  }

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <DataTable data={data} handleUpdate={handleUpdate} role={role} />
      <button className="btn btn-primary my-4" onClick={handleSaveAll}>Save All</button>
      <RecordForm newRecord={newRecord} handleInputChange={handleInputChange} handleAddRecord={handleAddRecord} />
      <ImpactChart data={data} />
    </div>
  );
};

export default App;
