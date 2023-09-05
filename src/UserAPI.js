import React, { useEffect, useReducer, useState } from 'react';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case 'ADD_USER':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };
    case 'DELETE_USER':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case 'UPDATE_USER':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              name:action.payload.updatedName,
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

const UserAPI = () => {
  const initialState = {
    loading: false,
    users: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);
  const [updatedName, setUpdatedName] = useState('');
  const [editUserId, setEditUserId] = useState(null);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    dispatch({ type: 'FETCH_USERS' });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      // Gérer les erreurs
    }
  };
  const addUser = async () => {
    dispatch({ type: 'ADD_USER' });
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newUserName }),
      });
      const data = await response.json();
  
      dispatch({ type: 'ADD_USER_SUCCESS', payload: { ...data, name: newUserName } });
    setNewUserName('');
    } catch (error) {
      // Gérer les erreurs
    }
  };
  
  

  const deleteUser = async (userId) => {
    dispatch({ type: 'DELETE_USER' });

    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
      });

      dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId });
    } catch (error) {
      // Gérer les erreurs
    }
  };

  const updateUser = async (userId) => {
    dispatch({ type: 'UPDATE_USER' });
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editUserId === null ? newUserName : updatedName }),
      });
      const data = await response.json();
  
      dispatch({ type: 'UPDATE_USER_SUCCESS', payload: { id: userId, updatedName: data.name } });
  
      if (editUserId === null) {
        setNewUserName('');
      } else {
        setEditUserId(null);
      }
    } catch (error) {
      // Gérer les erreurs
    }
  };
  
  
  const handleEdit = (userId, name) => {
    if (state.users.find(user => user.id === userId)) {
      // L'utilisateur existe déjà dans la liste, le mettre en édition normalement
      setEditUserId(userId);
      setUpdatedName(name);
    } else {
      // L'utilisateur est nouvellement ajouté, réinitialiser les valeurs d'édition
      setEditUserId(userId);
      setUpdatedName('');
    }
  };
  
  
  const handleCancelEdit = () => {
    setEditUserId(null);
    setUpdatedName('');
  };
  const handleAddUser = () => {
    addUser();
    setNewUserName('');
  };

//   if (state.loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
    <h1>Users</h1>

    <div>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        {newUserName && (
          <>
            <button onClick={handleAddUser}>
              Add User
            </button>
            <button onClick={() => setNewUserName('')}>
              Cancel
            </button>
          </>
        )}
      </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              {editUserId === user.id ? (
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              ) : (
                user.name
              )}
            </td>
            <td>
              {editUserId === user.id ? (
                <>
                  <button onClick={() => updateUser(user.id)}>
                    Save
                  </button>
                  <button onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleEdit(user.id, user.name)}>
                    Edit
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};


export default UserAPI;
