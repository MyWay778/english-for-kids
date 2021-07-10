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
import DeleteIcon from '../../static/icon/delete.svg';
import {CardType} from '../../types/game';
import CardSound from '../card-sound';
import CardSoundInput from '../card-sound-input';
import CardAddItem from '../card-add-item';

interface AdminWordsListProps {
  words: CardType[];
  edit: boolean;
}

const AdminWordsList: FC<AdminWordsListProps> = ({words, edit}): ReactElement =>
  <CardList>
    {words.map(word => (
      <AdminCard key={word.id}>
        <CardItem title="Word">
          {edit ? (
            <input className="admin-page-category-card-row--input" type='text' value={word.spelling}/>
          ) : word.spelling}
        </CardItem>
        <CardItem title="Translation">
          {edit ? (
            <input className="admin-page-category-card-row--input" type='text' value={word.translating}/>
          ) : word.translating}
        </CardItem>
        <CardItem title="Sound">
          {edit ? <CardSoundInput title={'Choose file'}/> : <CardSound title={word.spelling} soundUrl={word.soundSrc}/>}
        </CardItem>
        <CardItem title="Image">
          <label
            className={clsx('admin-page-category-card-row-avatar-container', edit && 'admin-page-category-card-row-avatar-container_edit')}
            htmlFor="admin-page-category-card-row--image-input">
            <img className="admin-page-category-card-row--avatar" src={word.imageSrc} alt={word.spelling}/>
          </label>
          <input id="admin-page-category-card-row--image-input"
                 className="admin-words-list-card--image-input" type="file" disabled={!edit}/>
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
                <IconButton title="Delete" iconUrl={DeleteIcon} color="tomato" fontWeight={600}/>
              </>
            )
          }
        </CardControl>
      </AdminCard>
    ))}
    <CardAddItem itemName="word"/>
  </CardList>

export default AdminWordsList;
