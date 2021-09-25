import React, { FC } from 'react';
import {DrillDProps} from './types';
import map from 'lodash/map';
import isArray from 'lodash/isArray';
import {DataProps} from './types/data';

const DrillD: FC<DrillDProps> = ({data}) => {
  return <div>
    {map(isArray(data) ? data : data?.children, (child: DataProps, index: number) => (
        <p key={index}>{child.name}</p>
    ))}
  </div>
}

export default DrillD;
