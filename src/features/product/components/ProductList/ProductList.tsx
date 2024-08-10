'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Flex from '@/components/Flex';
import Text from '@/components/typography/Text';
import Chip from '@/components/Chip';
import Container from '@/components/grid/Container';
import Row from '@/components/grid/Row';
import Col from '@/components/grid/Col';
import Title from '@/components/typography/Title';
import Paragraph from '@/components/typography/Paragraph';
import Link from '@/components/typography/Link';
import { MdStarRate } from 'react-icons/md';
import Icon from '@/components/Icon';
import Image from '@/components/Image';

import { formatNumber } from '@/utils/number';

import styles from './ProductList.module.scss';

import ProductPrice from '../ProductPrice';

import type { ProductListProps } from './ProductList.types';

const ProductList = (props: ProductListProps) => {
    const { products, title } = props;

    return (
        <Container>
            <Flex justify="space-between" className="mb-md">
                {title && <Title level={2}>{title}</Title>}
                <div>1234</div>
            </Flex>
            <Swiper slidesPerView={4} spaceBetween={0}>
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className={styles.product}>
                            <div className={styles.chips}>
                                {product.chips.map((chip, chipIndex) => (
                                    <Chip key={chipIndex} className={styles.chip}>
                                        {chip}
                                    </Chip>
                                ))}
                            </div>
                            <div className={styles.imageWrap}>
                                <Image
                                    className={styles.image}
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                />
                            </div>
                            <Flex className={styles.bottom} justify="space-between" align="center">
                                <Title level={3} className={styles.name} family="plex-sans">
                                    {product.name}
                                </Title>
                                <ProductPrice
                                    className={styles.price}
                                    price={product.price}
                                    offer={product.offer}
                                />
                            </Flex>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default ProductList;
