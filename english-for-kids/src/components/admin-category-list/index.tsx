import React, {FC, ReactElement, SyntheticEvent, useState} from 'react';
import {Link, useRouteMatch, useParams} from 'react-router-dom';
import './styles.scss';
import CardList from '../card-list';
import CardAddItem from '../card-add-item';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import {AdminCategoryType} from '../../types/admin-panel';
import AdminCategoryCard from '../admin-category-card';
import {CategoryType} from '../../types/game';

interface AdminCategoryListProps {
  categories: AdminCategoryType[];
  edit: boolean;
}

const AdminCategoryList: FC<AdminCategoryListProps> = ({categories, edit}): ReactElement => {
  const {setEditableCategoryId, editAdminCategory, addCategory} = useActions();
  const {editableCategoryId} = useTypedSelector(state => ({...state.adminPanel}));

  const [addMode, setAddMode] = useState(false);

  const cancelHandler = (): void => {
    setEditableCategoryId(null);
  }

  const addHandler = (): void => {
    setAddMode(true);
  }

  const cancelAddHandler = (): void => {
    setAddMode(false);
  }

  const saveAddHandler = (data: CategoryType): void => {
    setAddMode(false);
    addCategory(data);
  }

  return (
    <>
      <h2 className="admin-page-title">Categories</h2>
      <CardList>
        {categories.map(category => {

            const clickEditHandler = (): void => {
              setEditableCategoryId(category.id);
            }
            const editable = category.id === editableCategoryId;

            return <AdminCategoryCard key={category.id} category={category} clickEditHandler={clickEditHandler}
                                      cancelHandler={cancelHandler} saveHandler={editAdminCategory} editable={editable}/>
          }
        )}
        {addMode ? <AdminCategoryCard category={{id: 0, name: `Category ${categories.length}`, imageSrc: '', wordCount: 0}} editable={true}
                                      saveHandler={saveAddHandler}
                                      cancelHandler={cancelAddHandler}/> :
          <CardAddItem onClick={addHandler} itemName="category"/>}
      </CardList>
    </>
  )
}

export default AdminCategoryList;
