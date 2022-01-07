import { useEffect, useState } from 'react';
import './App.scss';
import { Comments } from './components/Comments';
import { FormPost } from './components/FormPost';

const App = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="App">
      <FormPost />
      <Comments comments={comments} />
    </div>
  );
}

export default App;
