/* eslint-disable arrow-body-style */
import { FC, ReactElement } from 'react';
import './styles.scss';

const Modal: FC = ({ children }): ReactElement => {
  return (
    <div className="modal">
      <div className="modal__window">{children}</div>
      <div className="modal__backdrop"></div>
    </div>
  );
};

export default Modal;
