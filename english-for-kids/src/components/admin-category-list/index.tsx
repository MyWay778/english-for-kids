import {FC, ReactElement} from 'react';
import './styles.scss';
import clsx from 'clsx';
import CardList from '../card-list';
import AdminCard from '../admin-card';
import CardItem from '../card-item';
import CardControl from '../card-control';
import IconButton from '../icon-button';
import SaveIcon from '../../static/icon/floppy-disk.svg';
import CancelIcon from '../../static/icon/close.svg';
import EditIcon from '../../static/icon/edit.svg';
import WordsIcon from '../../static/icon/list.svg';
import DeleteIcon from '../../static/icon/delete.svg';
import {CategoryType} from '../../types/game';
import CardAddItem from '../card-add-item';

interface AdminCategoryListProps {
  categories: CategoryType[];
  edit: boolean;
}

const AdminCategoryList: FC<AdminCategoryListProps> = ({categories, edit}): ReactElement =>
  <CardList>
    {categories.map(category => (
      <AdminCard key={category.id}>
        <CardItem title="Name">
          {edit ? (
            <input className="admin-page-category-card-row--input" type='text' value={category.name}/>
          ) : category.name}
        </CardItem>
        <CardItem title="Word count">
          {category.wordCount}
        </CardItem>
        <CardItem title="Image">
          <label
            className={clsx('admin-page-category-card-row-avatar-container', edit && 'admin-page-category-card-row-avatar-container_edit')}
            htmlFor="admin-page-category-card-row--image-input">
            <img className="admin-page-category-card-row--avatar" src={category.imageSrc} alt={category.name}/>
          </label>
          <input id="admin-page-category-card-row--image-input"
                 className="admin-page-category-card-row--image-input" type="file" disabled={!edit}/>
        </CardItem>
        <CardControl>
          {
            edit ? (
              <>
                <IconButton title="Save" iconUrl={SaveIcon} color="tomato" fontWeight={600}/>
                <IconButton title="Cancel" iconUrl={CancelIcon}/>
              </>
            ) : (
              <>
                <IconButton title="Edit" iconUrl={EditIcon}/>
                <IconButton title="Words" iconUrl={WordsIcon}/>
                <IconButton title="Delete" iconUrl={DeleteIcon} color="tomato" fontWeight={600}/>
              </>
            )
          }
        </CardControl>
      </AdminCard>
    ))}
    <CardAddItem itemName="category"/>
  </CardList>

export default AdminCategoryList;
