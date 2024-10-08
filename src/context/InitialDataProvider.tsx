'use client';

import React from 'react';

import useOnMount from '@/hooks/useOnMount';
import useNotification from '@/features/notification/hooks/useNotification';
import { useAppDispatch } from '@/hooks/useStore';

import type { UserRole } from '@prisma/client';

import { userInitialize as userInitializeServerAction } from '@/features/user/routes';

interface InitialDataContext {
    userRole: UserRole;
}

const InitialDataContext = React.createContext<InitialDataContext>({
    userRole: 'GUEST',
});

export const InitialDataProvider = ({ children }: { children: React.ReactNode }) => {
    const { notifyError, notifySuccess } = useNotification();
    const dispatch = useAppDispatch();

    const initialData: InitialDataContext = {
        userRole: 'GUEST',
    };

    const userInitialize = async () => {
        const response = await userInitializeServerAction({});
        if (!response.isSuccess) {
            notifyError(response.message);
            return;
        }
        // TODO
    };

    useOnMount(() => {
        // userInitialize();
    });

    return (
        <InitialDataContext.Provider value={initialData}>{children}</InitialDataContext.Provider>
    );
};

export const useInitialData = () => {
    const context = React.useContext(InitialDataContext);
    return context;
};