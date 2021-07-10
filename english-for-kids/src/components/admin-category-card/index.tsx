/* eslint-disable arrow-body-style */
import {FC, ReactElement} from 'react';
import './styles.scss';
import clsx from 'clsx';

interface AdminCategoryCardProps {
  name: string;
  imageUrl: string;
  words: number;
  edit: boolean;
}

const AdminCategoryCard: FC<AdminCategoryCardProps> = ({
                                                         name = 'unknown',
                                                         imageUrl = '',
                                                         words = 0,
                                                         edit = false,
                                                       }): ReactElement => {
  return (
    <div className="admin-page-category-card">
      <div className="admin-page-category-card-row">
        <span className="admin-page-category-card-row--title">Name: </span>
        <span className="admin-page-category-card-row--value admin-page-category-card-row--value_text">
          {edit ? (
            <input
              className="admin-page-category-card-row--input"
              type="text"
              value={name}
            />
          ) : (
            name
          )}
        </span>
      </div>
      <div className="admin-page-category-card-row">
        <span className="admin-page-category-card-row--title">
          Word count:{' '}
        </span>
        <span className="admin-page-category-card-row--value admin-page-category-card-row--value_text">
          {words}
        </span>
      </div>
      <div className="admin-page-category-card-row">
        <span className="admin-page-category-card-row--title">Image: </span>
        <div className="admin-page-category-card-row--value">
          <label
            className={clsx('admin-page-category-card-row-avatar-container', edit && 'admin-page-category-card-row-avatar-container_edit')}
            htmlFor="admin-page-category-card-row--image-input">
            <img
              className="admin-page-category-card-row--avatar"
              src={imageUrl}
              alt="avatar"
            />
          </label>
          <input id="admin-page-category-card-row--image-input"
                 className="admin-page-category-card-row--image-input" type="file" disabled={!edit}/>
        </div>
      </div>
      <div className="admin-page-category-control">
        {
          edit ? (
              <>
                <button className="admin-page-category-control--btn admin-page-category-control--btn_save">
                  Save
                </button>
                <button className="admin-page-category-control--btn admin-page-category-control--btn_cancel">
                  Cancel
                </button>
              </>
            )
            : (
              <>
                <button className="admin-page-category-control--btn admin-page-category-control--btn_edit">
                  Edit
                </button>
                <button className="admin-page-category-control--btn admin-page-category-control--btn_words">
                  Words
                </button>
                <button className="admin-page-category-control--btn admin-page-category-control--btn_delete">
                  Delete
                </button>
              </>)
        }
      </div>
    </div>
  );
};

export default AdminCategoryCard;
