import './CMSortButton.scss';
import classNames from 'classnames';

export const CMSortButton = ({ value, activeSort, click }) => (
    <button
      className={classNames(
        "sort-button",
        activeSort === value && "sort-button--active",
      )}
      onClick={click}
    >
      {value}
    </button>
);
