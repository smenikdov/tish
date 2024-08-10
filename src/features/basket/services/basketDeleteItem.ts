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

import { basketGetOneItemHandler } from './basketGetOneItem';

export const basketDeleteItemHandler = new Handler({
    name: 'Удаление товара из корзины',
    errors: { default: 'Ошибка при удалении товара из корзины' },
    schema: v.object({
        userId: v.id(),
        productId: v.id(),
    }),

    async request(payload: { userId: number; productId: number }) {
        const basketGetProductResponse = await basketGetOneItemHandler.execute(payload);
        if (!basketGetProductResponse.isSuccess) {
            throw new Error('Ошибка при проверке товара на наличие в корзине');
        }
        const existingBasketItem = basketGetProductResponse.data;
        if (!existingBasketItem) {
            return new SuccessResponse({ data: null });
        }

        await prisma.basketItem.delete({
            where: {
                productId_userId: {
                    productId: payload.productId,
                    userId: payload.userId,
                },
            },
        });
        return new SuccessResponse({ data: null });
    },
});
