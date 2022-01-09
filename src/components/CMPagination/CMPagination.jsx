import './CMPagination.scss';
import classNames from 'classnames';
import { Context } from '../../context';
import { useContext } from 'react';

export const CMPagination = ({ links }) => {
  const {currentPage, setPage} = useContext(Context);

  return (
    <div className="comments__pagination">
      {links.map((link, i) => {
        if (!link.url) {
          return <div key={i} className='comments__pagination-dots'>...</div>
        }

        return (
          <button
            key={i}
            className={classNames(
              'comments__pagination-btn',
              link.label === currentPage && 'comments__pagination-btn--active',
            )}
            value={link.label}
            onClick={setPage}
          >
            {link.label}
          </button>
        )
      })}
    </div>
  );
};
