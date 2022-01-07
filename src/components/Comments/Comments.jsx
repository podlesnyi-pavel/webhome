import './Comments.scss';
import { useState, useContext } from 'react';
import classNames from 'classnames';
import { Comment } from '../Comment/Comment';
import { Context } from '../../context';

export const Comments = () => {
  const [activeSort, setActiveSort] = useState('Most Liked');
  const { comments } = useContext(Context);

  return (
    <div className="comments">
      <div className="comments__header">
        <div className="comments__responses">{comments.total} Responses</div>
        <div className="comments__sorts">
          <button
            className={classNames(
              "comments__sort",
              activeSort === 'Newest' && "comments__sort--active",
            )}
            onClick={() => setActiveSort('Newest')}
          >
            Newest
          </button>

          <button
            className={classNames(
              "comments__sort",
              activeSort === 'Most Liked' && "comments__sort--active",
            )}
            onClick={() => setActiveSort('Most Liked')}
          >
            Most Liked
          </button>

          <button
            className={classNames(
              "comments__sort",
              activeSort === 'Oldest' && "comments__sort--active",
            )}
            onClick={() => setActiveSort('Oldest')}
          >
            Oldest
          </button>
        </div>
      </div>
      {comments &&
        <ul className="comments__comments">
          {comments.data.map(comment => (
            <li key={comment.id} className='comments__comment'>
                <Comment
                  name={comment.name}
                  text={comment.text}
                  time={comment.created_at}
                />
              </li>
          ))}
        </ul>
      }

      <button className='comments__next-button'>Показать еще</button>
    </div>
  );
};
