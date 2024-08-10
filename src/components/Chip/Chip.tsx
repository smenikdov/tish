import React, { useMemo } from 'react';
import './Chip.scss';
import classNames from 'classnames';

import type { ChipProps } from './Chip.types';

const Chip = (props: ChipProps) => {
    const { children, color = 'dark', className, ...otherProps } = props;

    const mergedCls = classNames('chip', `chip-${color}`, className);

    return (
        <span {...otherProps} className={mergedCls}>
            {children}
        </span>
    );
};

export default Chip;