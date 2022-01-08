import './Comments.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { Comment } from '../Comment/Comment';
import { CMSortButton } from '../CMSortButton/CMSortButton';

export const Comments = ({ nextPage, comments, setPage, currentPage }) => {
  const [activeSort, setActiveSort] = useState('Most Liked');

  return (
    <div className="comments">
      <div className="comments__header">
        <div className="comments__responses">{comments.total} Responses</div>
        <div className="comments__sorts">
          <CMSortButton
            value={'Newest'}
            activeSort={activeSort}
            click={() => setActiveSort('Newest')}
          />
          <CMSortButton
            value={'Most Liked'}
            activeSort={activeSort}
            click={() => setActiveSort('Most Liked')}
          />
          <CMSortButton
            value={'Oldest'}
            activeSort={activeSort}
            click={() => setActiveSort('Oldest')}
          />
        </div>
      </div>
      {comments &&
        <>
          <ul className="comments__comments">
            {comments.data.map(comment => (
              <li key={comment.id} className='comments__comment'>
                <Comment
                  name={comment.name}
                  text={comment.text}
                  time={comment.created_at} />
              </li>
            ))}
          </ul>
          
          <div className="comments__pagination">
            {comments.links.slice(1, -1).map((link, i) => (
              <button
                key={i}
                className={classNames(
                  link.label === currentPage && 'comments__pagination-btn'
                )}
                value={link.label}
                onClick={setPage}
                disabled={!link.url}
              >
                {link.label}
              </button>
            ))}
          </div>

          {currentPage !== comments.last_page &&
            <button className='comments__next-button' onClick={nextPage}>
              Показать еще
            </button>
          }
        </>
      }
    </div>
  );
};
