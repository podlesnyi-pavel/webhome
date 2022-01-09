import './Comments.scss';
import { useState } from 'react';
import { CMSortButton } from '../CMSortButton/CMSortButton';
import { CMPagination } from '../CMPagination/CMPagination';
import { CMCommentsList } from '../CMCommentsList/CMCommentsList';

export const Comments = ({ nextPage, comments, currentPage }) => {
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
          <CMCommentsList activeSort={activeSort} />
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
