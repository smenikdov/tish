import type React from 'react';

export interface SlideType {
    image: string;
    title: string;
    description: React.ReactNode;
}

export interface SliderBlockProps {
    content?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    slides: Array<SlideType>;
}
