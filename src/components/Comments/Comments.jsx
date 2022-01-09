import './Comments.scss';
import { useState } from 'react';
import { Comment } from '../Comment/Comment';
import { CMSortButton } from '../CMSortButton/CMSortButton';
import { CMPagination } from '../CMPagination/CMPagination';

export const Comments = ({ nextPage, comments, currentPage }) => {
  const [activeSort, setActiveSort] = useState('Most Liked');

  const getSortComments = () => {
    if (activeSort === 'Most Liked') {
      return comments.data;
    }

    if (activeSort === 'Oldest') {
      return [...comments.data].sort((firstComment, secondComment) => (
        Date.parse(firstComment.created_at) - Date.parse(secondComment.created_at)
      ));
    }

    if (activeSort === 'Newest') {
      return [...comments.data].sort((firstComment, secondComment) => (
        Date.parse(secondComment.created_at) - Date.parse(firstComment.created_at)
      ));
    }
  };

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
            {getSortComments().map(comment => (
              <li key={comment.id} className='comments__comment'>
                <Comment
                  name={comment.name}
                  text={comment.text}
                  time={comment.created_at} />
              </li>
            ))}
          </ul>

          <CMPagination links={comments.links.slice(1, -1)} />

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
