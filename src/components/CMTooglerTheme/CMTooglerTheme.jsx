import './CMTooglerTheme.scss';
export const CMTooglerTheme = ({ themeToggler, theme }) => (
  <button className='toogler-theme' onClick={themeToggler}>
    {theme === 'light' ? 'Light mode' : 'Dark mode'}
  </button>
);
