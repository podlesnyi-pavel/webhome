import './App.scss';
import { useEffect, useState } from 'react';
import { Comments } from './components/Comments';
import { FormPost } from './components/FormPost';
import { Context } from './context';

const App = () => {
  const [comments, setComments] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  const getComments = () => {
    fetch('https://jordan.ashton.fashion/api/goods/30/comments')
      .then(response => response.json())
      .then(comments => {
        setComments(comments);
        console.log(comments);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Context.Provider value={{ comments }}>
      <div className="App">
        <FormPost />
        <Comments />
      </div>
    </Context.Provider>
  );
}

export default App;
