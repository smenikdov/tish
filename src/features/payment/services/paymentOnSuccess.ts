import 'server-only';
import prisma from '@/lib/prisma';
import { Handler } from '@/utils/actions/routes';
import { SuccessResponse } from '@/utils/actions/responses';
import * as v from '@/utils/validate';

import { PAYMENT_STATUS } from '@/constants';

export const paymentOnSuccessHandler = new Handler({
    name: 'Обработка успешного платежа',
    errors: { default: 'Ошибка при обработке успешного платежа' },
    schema: v.object({
        paymentYookassaId: v.id(),
    }),

    async request(payload: { paymentYookassaId: number }) {
        const payment = await prisma.payment.update({
            data: {
                status: PAYMENT_STATUS.SUCCEEDED,
            },
            where: {
                yookassaId: payload.paymentYookassaId,
            }
        });
        return new SuccessResponse({ data: null });
    },
});
