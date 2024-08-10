import 'server-only';
import prisma from '@/lib/prisma';
import { Handler } from '@/utils/actions/routes';
import {
    ServerErrorResponse,
    RequestErrorResponse,
    Response,
    SuccessResponse,
} from '@/utils/actions/responses';
import * as v from '@/utils/validate';
import { productScheme, formatProductScheme } from '@/utils/prisma';

export const basketGetAllItemsHandler = new Handler({
    name: 'Получение корзины',
    errors: { default: 'Ошибка при получении корзины' },
    schema: v.object({
        userId: v.id(),
    }),

    async request(payload: { userId: number }) {
        const basketItems = await prisma.basketItem.findMany({
            where: {
                userId: payload.userId,
            },
            select: {
                product: {
                    select: productScheme(payload.userId),
                },
            },
        });
        const formatBasketItems = basketItems.map((bi) => formatProductScheme(bi.product));
        return new SuccessResponse({ data: formatBasketItems });
    },
});
