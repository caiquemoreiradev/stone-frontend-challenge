import { ReactNode, createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";

import { useGetCurrency } from "./useCurrencyData";
import { DataToSubmitProps } from "../@types/SubmitFormData";

interface CurrencyConverterProps {
    children: ReactNode
}

export interface CurrencyConverterData {
    result: string;
    submitForm: (data: DataToSubmitProps) => void;
    handleReset: () => void;
}

export const CurrencyDataContext = createContext<CurrencyConverterData>({} as CurrencyConverterData);

export const CurrencyConverterProvider = ({ children }: CurrencyConverterProps) => {

    const { data } = useGetCurrency();

    const currency = data?.data.USDBRL.bid;

    const [result, setResult] = useState('');

    function submitForm(data: DataToSubmitProps): void {

        if (data.purchaseType === 'money') {

            const feeValue = data.value * (data.fee / 100);
            const IOFValue = data.value * 0.011;


            const converted = (data.value + feeValue) * (Number(currency) + IOFValue);

            const formatted = (converted).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
            setResult(formatted);


        } else {
            const feeValue = data.value * (data.fee / 100);
            const IOFValue = data.value * 0.064;

            const converted = (data.value + feeValue + IOFValue) * Number(currency);

            const formatted = (converted).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
            setResult(formatted);
        }
    }

    const handleReset = () => {

        setResult('')
    }

    return <CurrencyDataContext.Provider value={{
        result,
        submitForm,
        handleReset
    }}>{children}</CurrencyDataContext.Provider>;
};

export const useCurrencyConverter = () => {

    return useContext(CurrencyDataContext);
};