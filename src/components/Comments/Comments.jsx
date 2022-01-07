import { useState } from 'react';
import './Comments.scss';

export const Comments = ({ comments }) => {
  const [activeSort, setActiveSort] = useState('');
 
  return (
    <div className="comments">
      <div className="comments__header">
        <div className="comments__responses">10 Responses</div>
        <div className="comments__sorts">
          <button className="comments__sort">Newest</button>
          <button className="comments__sort">Most Liked</button>
          <button className="comments__sort">Oldest</button>
        </div>
      </div>
      
      <ul className="comments__comments">

      </ul>
    </div>
  );
};
