import type { Metadata } from 'next';

import Container from '@/components/grid/Container';
import Row from '@/components/grid/Row';
import Col from '@/components/grid/Col';
import Text from '@/components/typography/Text';
import Paragraph from '@/components/typography/Paragraph';
import Title from '@/components/typography/Title';
import Link from '@/components/typography/Link';
import Icon from '@/components/Icon';
import Empty from '@/components/Empty';
import Result from '@/components/Result';
import Button from '@/components/Button';
import Tooltip from '@/components/floating/Tooltip';
import styles from './page.module.css';
import Input from '@/components/form/Input';
import ModalDialog from '@/components/modal/ModalDialog';
import Table from '@/components/Table';
import Flex from '@/components/Flex';

import ProductListFilters from '@/features/product/components/ProductListFilters';

import type { PageProps, SearchParams } from '@/typings';
import type { TableColumnsFor } from '@/components/Table';

import { formatPhoneNumber } from '@/utils/text';
import { parseSearchParams as psp } from '@/utils/actions/search-params';

import { productGetAll } from '@/features/product/routes';

export const metadata: Metadata = {
    title: 'Админпанель | Товары',
    description: 'Generated by create next app',
};

const getProducts = async (params?: SearchParams) => {
    const response = await productGetAll({
        page: psp.integer(params?.page) || 1,
        productId: psp.integer(params?.productId),
        name: psp.string(params?.name),
    });
    if (!response.isSuccess) {
        throw new Error('Ошибка при загрузке страницы');
    }

    return response.data;
};

const columns: TableColumnsFor<typeof getProducts> = [
    {
        title: 'ID',
        render: ({ id }) => id,
    },
    {
        title: 'Название',
        render: ({ name }) => name,
    },
    {
        title: 'Стоимость',
        render: ({ price }) => price,
    },
    {
        title: 'Действия',
        render: ({ id }) => (
            <Button href={`/admin/product/${id}`} variant="link" size="sm">
                Подробнее
            </Button>
        ),
    },
];

export default async function Product(props: PageProps) {
    const products = await getProducts(props.searchParams);

    return (
        <main>
            <Container className="mt-lg">
                <ProductListFilters />
                <Table columns={columns} data={products} />
            </Container>
        </main>
    );
}
