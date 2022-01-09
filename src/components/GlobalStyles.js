import { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .comment__icon {
    background-color: ${({ theme }) => theme.colorIcon};
  }

  .toogler-theme {
    border-color: ${({ theme }) => theme.toggleBorder};
  }
`;
