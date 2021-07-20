import React, {FC, ReactElement, useCallback, useEffect, useRef, useState} from 'react';
import './styles.scss';
import CardList from '../card-list';
import CardAddItem from '../card-add-item';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import {AdminCategoryType, NewCategoryData} from '../../types/admin-panel';
import AdminCategoryCard from '../admin-category-card';
import ImagePlaceholder from '../../static/images/others/placeholder-image.png';
import Loader from '../loader';

interface AdminCategoryListProps {
  categories: AdminCategoryType[];
}

const AdminCategoryList: FC<AdminCategoryListProps> = ({categories}): ReactElement => {
  const {setEditableCategoryId, editAdminCategory, addCategory, deleteCategory, fetchAdminCategories, cleanupAdminCategoryList} = useActions();
  const {editableCategoryId, isLoading} = useTypedSelector(state => ({...state.adminPanel}));
  const [addMode, setAddMode] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const lastCardElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries => {
        if (entries[0].isIntersecting) {
          fetchAdminCategories();
        }
      }));
      if (node) {
        observer.current.observe(node);
      }
    }, []
  )

  useEffect(() => () => {
      cleanupAdminCategoryList();
  }, []);

  const cancelHandler = (): void => {
    setEditableCategoryId(null);
  }

  const addHandler = (): void => {
    setAddMode(true);
  }

  const cancelAddHandler = (): void => {
    setAddMode(false);
  }

  const saveAddHandler = (data: NewCategoryData): void => {
    setAddMode(false);
    addCategory(data);
  }

  return (
    <>
      <h2 className="admin-page-title">Categories</h2>
      <CardList>
        {addMode ? <AdminCategoryCard
            category={{id: 0, name: `Category ${categories.length}`, imageSrc: ImagePlaceholder, wordCount: 0}}
            editable={true}
            saveHandler={saveAddHandler} deleteHandler={deleteCategory}
            cancelHandler={cancelAddHandler}/> :
          <CardAddItem onClick={addHandler} itemName="category"/>}
        {categories.map((category) => {

            const clickEditHandler = (): void => {
              setEditableCategoryId(category.id);
            }
            const editable = category.id === editableCategoryId;

            return <li key={category.id}><AdminCategoryCard category={category} clickEditHandler={clickEditHandler}
                                                            deleteHandler={deleteCategory} cancelHandler={cancelHandler}
                                                            saveHandler={editAdminCategory} editable={editable}/></li>
          }
        )}
      </CardList>
      {isLoading && <Loader className='admin-page-loader'/>}
      <div className='admin-page-observer' ref={lastCardElementRef}/>
    </>
  )
}

export default AdminCategoryList;
