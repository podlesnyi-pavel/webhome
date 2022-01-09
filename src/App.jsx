import './App.scss';
import { useEffect, useState } from 'react';
import { Comments } from './components/Comments';
import { FormPost } from './components/FormPost';
import { Context } from './context';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { ThemeProvider } from 'styled-components';
import { CMTooglerTheme } from './components/CMTooglerTheme/CMTooglerTheme';

const App = () => {
  const [comments, setComments] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState('light');

  const getComments = () => {
    fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${currentPage}`)
      .then(response => response.json())
      .then(comments => setComments(comments));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const setPage = (event) => {
    setCurrentPage(Number(event.target.value));
  };
  
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    getComments();
  }, [currentPage]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Context.Provider value={{
        comments, currentPage, setPage
      }}>
        <div className="App">
          <FormPost currentPage={currentPage} lastPage={comments.last_page} />
    
          <Comments
            nextPage={nextPage}
            comments={comments}
            currentPage={currentPage}
          />

          <CMTooglerTheme theme={theme} themeToggler={themeToggler} />
        </div>
      </Context.Provider>

    </ThemeProvider>
  );
}

export default App;
