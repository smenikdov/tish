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
import Input from '@/components/form/Input';
import ModalDialog from '@/components/modal/ModalDialog';
import InputNumber from '@/components/form/InputNumber';
import Flex from '@/components/Flex';
import Card from '@/components/Card';
import Breadcrumbs from '@/components/Breadcrumbs';

import TextBlock from '@/widgets/TextBlock/TextBlock';
import FaqBlock from '@/widgets/FaqBlock';

import AuthSessionsList from '@/features/auth/components/AuthSessionsList';
import UserDataForm from '@/features/user/components/UserDataForm';

export const metadata: Metadata = {
    title: 'Мои данные',
    description: 'Generated by create next app',
};

export default function Contacts() {
    return (
        <main>
            <Container>
                <Breadcrumbs className="mt-xl mb-xs" />
                <Card className="mb-lg">
                    <Title level={2}>Учётные данные</Title>
                    <div className="mb-md">
                        <Text color="muted">
                            Здесь вы можете отредактировать информацию о себе и добавить недостающую
                        </Text>
                    </div>
                    <UserDataForm />
                </Card>
                <Card>
                    <Title level={2}>Активные сеансы</Title>
                    <div className="mb-md">
                        <Text color="muted">Вы уже заходили в профиль на этих устройствах</Text>
                    </div>
                    <AuthSessionsList />
                </Card>
                {/* <Card>
                    <Title level={2}>Удаление аккаунта</Title>
                    <div>
                        <Text color="muted">Вместе с аккаунтом все ваши данные будут удалены</Text>
                    </div>
                    <Button>Удалить аккаунт</Button>
                </Card> */}
            </Container>
        </main>
    );
}
