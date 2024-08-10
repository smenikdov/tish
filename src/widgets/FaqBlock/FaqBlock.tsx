import React from 'react';
import styles from './FaqBlock.module.scss';
import classNames from 'classnames';
import Title from '@/components/typography/Title';
import Paragraph from '@/components/typography/Paragraph';
import Container from '@/components/grid/Container';
import Flex from '@/components/Flex';
import Row from '@/components/grid/Row';
import Col from '@/components/grid/Col';
import Accordion from '@/components/Accordion';
import type { FaqBlockProps } from './FaqBlock.types';

const FaqBlock = (props: FaqBlockProps) => {
    const { className, title, content, before, after, questions, ...othersProps } = props;

    const mergedCls = classNames(styles.container, className);

    const accordionItems = questions.map((q) => ({
        header: q.question,
        content: q.answer,
    }));

    return (
        <Container>
            <Row className={mergedCls} {...othersProps}>
                <Col lg={4}>
                    {' '}
                    {title && (
                        <Title className={styles.title} level={2}>
                            {title}
                        </Title>
                    )}
                </Col>

                <Col lg={8}>
                    <Accordion className={styles.accordion} items={accordionItems} />
                </Col>
            </Row>
        </Container>
    );
};

export default FaqBlock;
