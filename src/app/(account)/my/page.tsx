import type { Metadata } from 'next';

import Container from '@/components/grid/Container';
import Row from '@/components/grid/Row';
import Col from '@/components/grid/Col';
import Text from '@/components/typography/Text';
import Paragraph from '@/components/typography/Paragraph';
import Title from '@/components/typography/Title';
import Link from '@/components/typography/Link';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Tooltip from '@/components/floating/Tooltip';
import Input from '@/components/form/Input';
import ModalDialog from '@/components/modal/ModalDialog';
import InputNumber from '@/components/form/InputNumber';
import Flex from '@/components/Flex';
import Card from '@/components/Card';

import TextBlock from '@/widgets/TextBlock/TextBlock';
import FaqBlock from '@/widgets/FaqBlock';

export const metadata: Metadata = {
    title: 'Личный кабинет',
    description: 'Generated by create next app',
};

export default function Contacts() {
    return (
        <main>
            <Container className="mt-xl">
                <Row gapY="md">
                    <Col md={4}>
                        <Link href="/my/details">
                            <Card clickable>
                                <Text bold>Мои данные</Text>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link href="/my/orderlist">
                            <Card clickable>
                                <Text bold>Мои заказы</Text>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link href="/my/favorites">
                            <Card clickable>
                                <Text bold>Избранное</Text>
                            </Card>
                        </Link>
                    </Col>

                    {/* <Col md={4}>
                        <Link href="/my/cards">
                            <Card clickable>
                                <Text bold>Мои карты</Text>
                            </Card>
                        </Link>
                    </Col> */}
                    <Col md={4}>
                        <Link href="/my/balance">
                            <Card clickable>
                                <Text bold>Мой баланс</Text>
                            </Card>
                        </Link>
                    </Col>
                    {/* <Col md={2}>
                        <Link href="/my/checks">
                            <Card clickable>
                                <Text bold>Мои чеки</Text>
                            </Card>
                        </Link>
                    </Col> */}
                    {/* <Col md={2}>
                        <Link href="/my/points">
                            <Card clickable>
                                <Text bold>Баллы и бонусы</Text>
                            </Card>
                        </Link>
                    </Col> */}
                    <Col md={4}>
                        <Link href="/my/reviews">
                            <Card clickable>
                                <Text bold>Отзывы</Text>
                            </Card>
                        </Link>
                    </Col>
                    {/* <Col md={2}>
                        <Link href="/my/settings">
                            <Card clickable>
                                <Text bold>Настройки</Text>
                            </Card>
                        </Link>
                    </Col> */}
                    <Col md={4}>
                        <Link href="/basket">
                            <Card clickable>
                                <Text bold>Моя корзина</Text>
                            </Card>
                        </Link>
                    </Col>
                    {/* <Col md={2}>
                        <Card>
                            Сравнение
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </main>
    );
}
