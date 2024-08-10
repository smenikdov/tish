import React from 'react';
import type { TitleProps } from './Typography.types';
import Typography from './Typography';

const Title = (props: TitleProps) => {
    const { level = 2, family = 'plex-serif', ...otherProps } = props;
    const component: keyof JSX.IntrinsicElements = `h${level}`;
    return <Typography {...otherProps} family={family} component={component} />;
};

export default Title;
