import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from 'src/components/Footer';
import { fetchUserInfo, selectUserName } from 'src/containers/Home/homeDataSlice';

const Home = () => {
  const dispatch = useDispatch();
  const userNameDisplay = useSelector(selectUserName);

  const [userName, setUserName] = useState<string>('');

  return (
    <div>
      this is Home page
      <br />
      <input type={'text'} placeholder={'type github username'} onChange={e => setUserName(e.target.value)} />
      <br />
      <button
        onClick={() => {
          dispatch(fetchUserInfo(userName));
        }}>
        submit
      </button>
      <br />
      Result:
      {userNameDisplay}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
      <Footer name={'kien'} />
    </div>
  );
};
export default Home;
