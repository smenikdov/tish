import type React from 'react';

export interface ImageType {
    src: string;
    alt?: string;
}

export interface BannerBlockProps {
    title?: React.ReactNode;
    image: ImageType;
    content?: React.ReactNode;
    before?: React.ReactNode;
    after?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    reverse?: boolean;
}
