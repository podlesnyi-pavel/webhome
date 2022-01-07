import './Comment.scss';

export const Comment = ({ name, text, time }) => {
  const currentDate = new Date();
  // console.log(+currentDate - +time);

  const getDifferenceTime = () => {
    return currentDate.getDate();
  };

  return (
    <>
      <div className="comment__icon comment__item">
        {/* <img src="#" alt="icon user's" /> */}
      </div>
      <div className="comment__likes comment__item">&#10084; 21</div>
      <div className="comment__descr comment__item comment__item--shrink--1">
        <div className='comment__top'>
          <div className="comment__name">{name}</div>
          <div className="comment__days-ago comment__item">
            {getDifferenceTime()}
          </div>
        </div>
        <div className="comment__text">{text}</div>
      </div>
    </>
  );
};
