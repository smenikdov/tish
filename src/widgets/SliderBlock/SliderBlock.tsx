'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './SliderBlock.module.scss';

import Title from '@/components/typography/Title';
import Paragraph from '@/components/typography/Paragraph';
import Flex from '@/components/Flex';
import Image from '@/components/Image';

import useInterval from '@/hooks/useInterval';

import type { SliderBlockProps } from './SliderBlock.types';

const SliderBlock = (props: SliderBlockProps) => {
    const { className, content, slides, ...othersProps } = props;

    const mergedCls = classNames(styles.container, className);

    const [slideActiveIndex, setSlideActiveIndex] = useState(0);
    const [isActiveAnim, setIsActiveAnim] = useState(false);

    const nextSlide = () => {
        if (isActiveAnim) {
            return;
        }

        let nextSlideActiveIndex = slideActiveIndex + 1;
        if (nextSlideActiveIndex >= slides.length) {
            nextSlideActiveIndex = 0;
        }
        setSlideActiveIndex(nextSlideActiveIndex);
        setIsActiveAnim(true);
        setTimeout(() => {
            setIsActiveAnim(false);
        }, 500);
    };

    const { clear } = useInterval(nextSlide, 10000);

    const handleClick = () => {
        nextSlide();
        clear();
    };

    return (
        <div {...othersProps} className={mergedCls} onClick={handleClick}>
            {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    className={classNames(styles.slide, {
                        [`${styles.slideActive}`]: slideActiveIndex === slideIndex,
                    })}
                >
                    <Title className={styles.title} level={2}>
                        {slide.title}
                    </Title>
                    <Paragraph className={styles.description}>{slide.description}</Paragraph>
                    <Image className={styles.image} src={slide.image} alt={slide.title} fill />
                </div>
            ))}
        </div>
    );
};

export default SliderBlock;
