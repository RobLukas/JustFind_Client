import React, { FC } from 'react';
import props from './interface';

const Button: FC<props> = ({ title }: props) => <div>{title}</div>;

export default Button;
