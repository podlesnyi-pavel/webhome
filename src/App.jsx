import './App.scss';
import { useEffect, useState } from 'react';
import { Comments } from './components/Comments';
import { FormPost } from './components/FormPost';

const App = () => {
  const [comments, setComments] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getComments = () => {
    fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${currentPage}`)
      .then(response => response.json())
      .then(comments => {
        setComments(comments);
        console.log(comments);
      });
  };

  const createNewComment = (object) => {
    fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(object),
    });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const setPage = (event) => {
    setCurrentPage(Number(event.target.value));
  };

  useEffect(() => {
    getComments();
  }, [currentPage]);

  return (
    <div className="App">
      <FormPost createNewComment={createNewComment} />
      <Comments
        nextPage={nextPage}
        comments={comments}
        setPage={setPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
