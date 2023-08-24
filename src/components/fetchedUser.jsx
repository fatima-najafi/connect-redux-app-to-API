import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserItem } from '../store/usersSlice';

const Users = () => {
  const { userItem, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserItem());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error:{error}</div>}
      {!isLoading && userItem.length ? (
        <ul>
          {userItem.map((user) => (
            <li key={user.name.first}>
              {user.name.last}, {user.name.last}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Users;
