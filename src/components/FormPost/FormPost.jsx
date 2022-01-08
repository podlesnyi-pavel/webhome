import './FormPost.scss';
import { useState } from "react";

export const FormPost = ({ createNewComment }) => {
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');

  const postComment = (event) => {
    event.preventDefault();

    const currentDate = new Date();

    createNewComment({
      id: comments.data[comments.data.length - 1].id + 1,
      name: name,
      text: comments,
      visible: 0,
      product_id: 30,
      created_at: currentDate,
      updated_at: currentDate,
    })

    setName('');
    setComments('');
  };

  return (
    <form className="form-post" onSubmit={postComment}>
      <label className="form-post__label" htmlFor="name">
        Name
        <input
          className='form-post__field'
          type="text"
          id="name"
          name="name"
          placeholder="Write a name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label className="form-post__label" htmlFor="comments">
        Comments
        <textarea
          className='form-post__field form-post__field--textarea'
          type="text"
          id="comments"
          name="comments"
          placeholder="Write a review"
          required
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />

        <button
          className="form-post__submit"
          type="submit"
        >
          post
        </button>
      </label>
    </form>
  );
};
