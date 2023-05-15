import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Create from './pages/Create/Create';
import Edit from './pages/Edit/edit';
import Home from './pages/Home/home';
import List from './pages/List/List';
import MyPage from './pages/Mypage/Mypage';
import Post from './pages/Post/post';
import PostIt from './pages/Postit/Postit';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/list:id" element={<List />} />
      <Route path="/postit:id" element={<PostIt />} />
      <Route path="/post:id" element={<Post />} />
      <Route path="/edit:id" element={<Edit />} />
    </Routes>
    </Router>
  );
}

export default App;
