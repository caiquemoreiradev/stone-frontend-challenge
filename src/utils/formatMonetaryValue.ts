export const formatMonetaryValue = (value: string) => {

    let formattedValue = value.replace(/[^0-9.]/g, '');

    formattedValue = Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL',
    }).format(Number(value))

    console.log(formattedValue)

    return formattedValue;
}