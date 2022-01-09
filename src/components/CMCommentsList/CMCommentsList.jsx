import { Comment } from '../Comment/Comment';
import './CMCommentsList.scss';
import { Context } from '../../context';
import { useContext } from 'react';

export const CMCommentsList = ({ activeSort }) => {
  const { comments } = useContext(Context);

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
  );
};
