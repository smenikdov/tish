import React from 'react';
import styles from './Header.module.scss';
import Container from '@/components/grid/Container';
import Row from '@/components/grid/Row';
import Col from '@/components/grid/Col';
import Link from '@/components/typography/Link';
import Flex from '@/components/Flex';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { cookies as getCookies } from 'next/headers';

import { MdOutlineAccountCircle } from 'react-icons/md';

import HeaderLogo from './HeaderLogo';

const links = [
    {
        label: 'Услуги',
        href: '#product',
    },
    {
        label: 'Отзывы',
        href: '#review',
    },
    {
        label: 'FAQ',
        href: '#faq',
    },
    {
        label: 'Контакты',
        href: '#contacts',
    },
];

const Header = () => {
    const cookies = getCookies();
    const accessToken = cookies.get('accessToken')?.value;

    return (
        <header className={styles.header}>
            <Container>
                <Flex className={styles.container} align="center" justify="space-between">
                    <div>
                        <Flex>
                            {links.map((link) => (
                                <Link key={link.href} className={styles.link} href={link.href}>
                                    {link.label}
                                </Link>
                            ))}
                        </Flex>
                    </div>

                    <div className={styles.logo}>
                        <Link href="/">
                            <HeaderLogo />
                        </Link>
                    </div>

                    <div>
                        <Flex justify="flex-end">
                            <Button className={styles.loginButton}>Записаться</Button>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </header>
    );
};

export default Header;
