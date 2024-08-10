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

import TextBlock from '@/widgets/TextBlock/TextBlock';
import FaqBlock from '@/widgets/FaqBlock';

const orderQuestions = [
    {
        question: 'Как начать покупать как представитель компании?',
        answer: (
            <span>
                В личном кабинете, в разделе "Мои компании", добавьте информацию о своей организации
                и переключитесь на нее через основное меню. Выберите товары, которые хотите
                приобрести и добавьте в корзину. В корзине мы подскажем по каким товарам можно
                получить вычет по НДС, а по каким нет. Все оформленные заказы будут отображаться в
                личном кабинете.
                <br />
                <br />
                Мы работаем только с компаниями, зарегистрированными в пределах РФ.
            </span>
        ),
    },
    {
        question: 'Как можно оплатить заказ для компании?',
        answer: 'Вы можете оплатить заказ банковской картой онлайн, переводом на расчетный счет и через Ozon.Счет с возможность получить до 5% кэшбэка.',
    },
    {
        question: 'Как получить кэшбэк 5% за покупку?',
        answer: 'Пополните Ozon.Счет и оплачивайте с него покупки — получайте до 5% кэшбэка ozon.рублями. Все просто!',
    },
];

const docsQuestions = [
    {
        question: 'Какие сопроводительные документы предоставляются на заказ?',
        answer: 'После отгрузки заказа со склада на электронный адрес покупателя будут отправлены копии сопроводительных документов: счет-договор, универсальный передаточный документ(УПД) или Акт приема-передачи. Документы также будут доступны в личном кабинете.',
    },
    {
        question: 'Мне нужны оригиналы сопроводительных документов',
        answer: 'Если вам нужны оригиналы документов, отправьте в свободной форме запрос в нашу техническую поддержку с указанием номера заказа и адреса куда необходимо доставить документы (с индексом).',
    },
];

export const metadata: Metadata = {
    title: 'Часто задаваемые вопросы',
    description: 'Generated by create next app',
};

export default function Contacts() {
    return (
        <main>
            <TextBlock
                title="How can we help you?"
                content="Search our FAQ and find your answers"
                after={<Input placeholder="Search" />}
            />

            <FaqBlock title="Оформление заказа" questions={orderQuestions} />

            <FaqBlock title="Документооборот" questions={docsQuestions} />

            <TextBlock
                title="Still looking for an answer?"
                content="Shoot our team an email and we’ll get back to you ASAP (definitely within 24 hours)"
                after={<Button>Send an email</Button>}
            />
        </main>
    );
}
