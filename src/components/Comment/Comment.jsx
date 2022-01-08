import './Comment.scss';

export const Comment = ({ name, text, time }) => {
  
  const getDifferenceTime = () => {
    const currentDate = Date.parse(new Date());
    const dateOfCreatedComment = new Date(Date.parse(time));
    const differenceTime = currentDate - dateOfCreatedComment;

    const years = Math.floor(differenceTime / 31557600000);
    const months = Math.floor(differenceTime / 2629800000);
    const days = Math.floor(differenceTime / 86400000);
    const hours = Math.floor(differenceTime / 3600000);
    const minutes = Math.floor(differenceTime / 60000);
    const seconds = Math.floor(differenceTime / 1000);

    if (years) {
      return years <= 1 ? `(${years} year ago)` : `(${years} years ago)`
    }

    if (months) {
      return months <= 1 ? `(${months} month ago)` : `(${months} months ago)`
    }

    if (days) {
      return days <= 1 ? `(${days} day ago)` : `(${days} days ago)`
    }

    if (hours) {
      return hours <= 1 ? `(${hours} hour ago)` : `(${hours} hours ago)`
    }

    if (minutes) {
      return minutes <= 1 ? `(${minutes} minute ago)` : `(${minutes} minutes ago)`
    }

    if (seconds) {
      return seconds <= 1 ? `(${seconds} second ago)` : `(${seconds} seconds ago)`
    }
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
