import { useState } from "react"
import { FormContainer } from "../styles/components/form.styles"
import { Input } from "./Input"

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import { useGetCurrency } from "../hooks/useCurrencyData";
import { formatMonetaryValue } from "../utils/formatMonetaryValue";

const schema = yup.object({
    monetaryValue: yup.string().required('é necessário digitar um valor para a conversão').min(1, 'o valor deve conter no mínimo 3 caracteres'),
    percentageTax: yup.string().required('é necessário digitar a porcentagem da taxa').min(1, 'a porcentagem deve ter no mínimo 3 caracteres'),
}).required();

type FormData = yup.InferType<typeof schema>;

export const Form = () => {

    const { data } = useGetCurrency();

    const { result, submitForm, handleReset } = useCurrencyConverter();

    const [purchaseType, setPurchaseType] = useState('');
    const [fee, setFee] = useState('')

    const { control, reset, handleSubmit, formState: { errors, isValid }, getValues } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: { monetaryValue: '', percentageTax: '' },
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<FormData> = data => {

        setFee(data.percentageTax);

        const dataToSumit = {
            value: Number(data.monetaryValue),
            fee: Number(data.percentageTax),
            purchaseType,
        }

        submitForm(dataToSumit);
        reset();

    };

    return (
        <FormContainer>

            {!result ? (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="inputs__container">

                        <Controller
                            control={control}
                            name="monetaryValue"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    name="monetaryValue"
                                    label="Dólar:"
                                    placeholder="$ 0.00"
                                    value={value}
                                    onChange={onChange}
                                    monetary
                                    errorMessage={errors.monetaryValue?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="percentageTax"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Taxa do Estado:"
                                    placeholder="% 0.0"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.percentageTax?.message}
                                />
                            )}
                        />
                    </div>

                    <div className="purchase__type">
                        <span>Tipo de compra</span>

                        <div className="purchase__options">
                            <label>

                                <input
                                    id="money"
                                    type="radio"
                                    checked={purchaseType === 'money'}
                                    onChange={() => setPurchaseType('money')}
                                    value={'money'}
                                />

                                <span>Dinheiro</span>
                            </label>
                            <label>

                                <input
                                    id="credit__card"
                                    type="radio"
                                    checked={purchaseType === 'credit__card'}
                                    onChange={() => setPurchaseType('credit__card')}
                                    value={'credit__card'}
                                />

                                <span>Cartão</span>
                            </label>
                        </div>
                    </div>

                    <button disabled={!isValid || purchaseType === ''}>converter</button>
                </form>
            ) : (
                <div className="result__container">

                    <button onClick={handleReset}>Voltar</button>

                    <div className="result">
                        <p>O resultado do cálculo é</p>
                        <span>{result}</span>
                    </div>

                    <div className="result__details">
                        <p>
                            <strong>
                                Compra no {purchaseType === 'money' ? 'dinheiro' : 'cartão'} e taxa de 
                            </strong>
                            {(Number(fee)/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})}
                        </p>
                        <p><strong>Cotação do dólar:</strong> $ 1.00 = {formatMonetaryValue(Number(data?.data.USDBRL.bid))}</p>
                    </div>
                </div>
            )}
        </FormContainer>
    )
}