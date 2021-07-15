import {FC, ReactElement, useState, SyntheticEvent, useRef} from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import clsx from 'clsx';
import AdminCard from '../admin-card';
import CardItem from '../card-item';
import CardControl from '../card-control';
import IconButton from '../icon-button';
import SaveIcon from '../../static/icon/floppy-disk.svg';
import CancelIcon from '../../static/icon/close.svg';
import EditIcon from '../../static/icon/edit.svg';
import WordsIcon from '../../static/icon/list.svg';
import DeleteIcon from '../../static/icon/delete.svg';
import {AdminCategoryType, NewCategoryData} from '../../types/admin-panel';
import {CategoryType} from '../../types/game';
import ImagePlaceholder from '../../static/images/others/placeholder-image.png';

interface AdminCategoryCardProps {
  category: AdminCategoryType;
  editable?: boolean;
  clickEditHandler?: () => void;
  saveHandler: (data: NewCategoryData) => void;
  cancelHandler: () => void;
}

const AdminCategoryCard: FC<AdminCategoryCardProps> = ({category, clickEditHandler, cancelHandler, saveHandler, editable = false}): ReactElement => {
  const [name, setName] = useState(category.name);

  const [imageFile, setImageFile] = useState<string>();
  const imageRef = useRef<HTMLImageElement>(null);

  const changeNameHandler = (e: SyntheticEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    setName(target.value);
  }

  const clickSaveHandler = (): void => {
    saveHandler({id: category.id,name, imageFile});
  }

  const changeImageHandler = (e: SyntheticEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length === 0) {
      return
    }

    const reader = new FileReader();
    reader.onload = (evt): void => {
      const image = imageRef.current;
      if (image) {
        if ( evt.target && typeof evt.target.result  === 'string') {
          image.src =  evt.target.result;
          setImageFile(evt.target.result);
        }
      }
    }

    if (target.files) {
      reader.readAsDataURL(target.files[0]);
    }
  }

  return (
    <AdminCard key={category.id}>
      <CardItem title="Name">
        {editable ? (
          <input className="admin-page-category-card-row--input" type='text' value={name} onChange={changeNameHandler}/>
        ) : category.name}
      </CardItem>
      <CardItem title="Word count">
        {category.wordCount}
      </CardItem>
      <CardItem title="Image">
        <label
          className={clsx('admin-page-category-card-row-avatar-container', editable && 'admin-page-category-card-row-avatar-container_edit')}
        >
          <img className="admin-page-category-card-row--avatar" ref={imageRef} src={category.imageSrc || ImagePlaceholder} alt={category.name}/>
          <input onChange={changeImageHandler}
            className="admin-page-category-card-row--image-input" type="file" accept="image/*" disabled={!editable}/>
        </label>

      </CardItem>
      <CardControl>
        {
          editable ? (
            <>
              <IconButton title="Save" iconUrl={SaveIcon} color="tomato" fontWeight={600} onClick={clickSaveHandler}/>
              <IconButton title="Cancel" iconUrl={CancelIcon} onClick={cancelHandler}/>
            </>
          ) : (
            <>
              <IconButton title="Edit" iconUrl={EditIcon} onClick={clickEditHandler}/>
              <Link className="icon-button icon-button__link" to={`admin/category/${category.id}`}>
                <img className="icon-button--icon" src={WordsIcon} alt='words'/>
                <span className="icon-button--title">Words</span>
              </Link>
              <IconButton title="Delete" iconUrl={DeleteIcon} color="tomato" fontWeight={600}/>
            </>
          )
        }
      </CardControl>
    </AdminCard>
  )
}

export default AdminCategoryCard;
