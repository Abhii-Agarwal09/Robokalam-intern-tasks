import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import StudyRoom from './pages/RoomPage';

function App() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    setRoomId(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
    setRoomId('');
  };
  return (
    <div className="App">
      <form
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
        onSubmit={formSubmitHandler}
      >
        <label style={{ marginRight: '1rem' }} htmlFor="roomId">
          Enter study room id:{' '}
        </label>
        <input
          type="text"
          name="roomId"
          id="roomId"
          value={roomId}
          onChange={inputChangeHandler}
        />
        <button>Submit</button>
      </form>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<StudyRoom />} />
      </Routes>
    </div>
  );
}

export default App;
