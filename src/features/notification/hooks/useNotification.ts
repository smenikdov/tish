import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '@/hooks/useStore';
import type { Notification } from '../typings';
import {
    notificationCreate as notificationCreateAction,
    notificationDelete as notificationDeleteAction,
} from '../store';

const useNotification = () => {
    const dispatch = useAppDispatch();

    const createNotification = (notification: Omit<Notification, 'id'>) => {
        const notificationId = uuidv4();
        dispatch(
            notificationCreateAction({
                ...notification,
                id: notificationId,
            })
        );
        setTimeout(() => {
            dispatch(notificationDeleteAction(notificationId));
        }, notification.timeOut);
    };

    const notifyError = (message: string) => {
        createNotification({
            title: 'Ошибка',
            message: message,
            timeOut: 8000,
            color: 'danger',
        });
    };

    const notifySuccess = (message: string) => {
        createNotification({
            title: 'Успешно',
            message: message,
            timeOut: 8000,
            color: 'success',
        });
    };

    return { notifyError, notifySuccess } as const;
};

export default useNotification;
