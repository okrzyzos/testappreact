import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const CustomDataGrid = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      setUsers(data);
      setLoading(false);
    } catch (error) {
      // Gérer les erreurs
      setLoading(false);
    }
  };

  const addUser = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newUserName }),
      });
      const data = await response.json();

      setUsers([...users, data]);
      setNewUserName('');
      setLoading(false);
    } catch (error) {
      // Gérer les erreurs
      setLoading(false);
    }
  };
  

  const handleNameChange = (event) => {
    setNewUserName(event.target.value);
  };
  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setEditUserId(userId);
      setEditUserName(userToEdit.name);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div>
          {editUserId === params.row.id ? (
            <>
              <input type="text" value={editUserName} onChange={(e) => setEditUserName(e.target.value)} />

<button onClick={handleUpdate}>Save</button>
<button onClick={() => setEditUserId(null)}>Cancel</button>
</>
) : (
<button onClick={() => handleEdit(params.row.id)}>Edit</button>
)}
<button onClick={() => handleDelete(params.row.id)}>Delete</button>
</div>
),
},
];




  const handleDelete = async (userId) => {
    setLoading(true);

    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
      });

      setUsers(users.filter((user) => user.id !== userId));
      setLoading(false);
    } catch (error) {
      // Gérer les erreurs
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editUserName }),
      });
      const data = await response.json();

      const updatedUsers = users.map((user) => {
        if (user.id === editUserId) {
          return { ...user, name: data.name };
        }
        return user;
      });

      setUsers(updatedUsers);
      setEditUserId(null);
      setEditUserName('');
      setLoading(false);
    } catch (error) {
      // Gérer les erreurs
      setLoading(false);
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
       <div style={{ height: 100, width: '100%', marginTop:'50px' }}>
    <input type="text" value={newUserName} onChange={handleNameChange} />
    <button onClick={addUser}>Add User</button>
    </div>
    <DataGrid
    rows={users}
    columns={columns}
    loading={loading}
    components={{
    Toolbar: GridToolbar,
    }}
    editMode="cell"
    onCellEditCommit={(params) => {
    const updatedUsers = [...users];
    const rowIndex = updatedUsers.findIndex((user) => user.id === params.id);
    updatedUsers[rowIndex].name = params.value;
    setUsers(updatedUsers);
    }}
    />
   
    </div>
    );
    };
        
        export default CustomDataGrid;
