export const formatPercentageValue = (value: string) => {

    //Remove tudo o que não é dígito
    let formattedValue = value.replace(/\D/g, "")

    formattedValue = Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(value) / 100);

    return formattedValue;
}