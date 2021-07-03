import clsx from 'clsx';
import { FC, ReactElement } from 'react';
import './style.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({className}): ReactElement => (
  <div className={clsx('lds-spinner', className)}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loader;
