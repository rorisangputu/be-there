import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import * as apiClient from '../apiClient';

type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
};

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    isLoggedIn: boolean;
}

const AppContext = React.createContext<AppContext | undefined>(undefined);

export
