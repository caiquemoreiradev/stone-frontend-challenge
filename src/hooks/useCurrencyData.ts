import axios, { AxiosPromise } from "axios";

import { useQuery } from "@tanstack/react-query";
import { CurrencyResponse } from "../@types/CurrencyResponse";

async function getCurrency(): AxiosPromise<CurrencyResponse> {

    const response = await axios.get<CurrencyResponse>(
        "https://economia.awesomeapi.com.br/last/USD-BRL"
    );

    console.log('Data', response.data.USDBRL)

    return response;
}

export function useGetCurrency() {

    const query = useQuery({
        queryFn: getCurrency,
        queryKey: ['get-currency']
    })

    return {
        ...query,
        data: query.data
    };
}


