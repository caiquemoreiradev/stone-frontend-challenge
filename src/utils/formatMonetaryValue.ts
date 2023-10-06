export const formatMonetaryValue = (value: number) => {

    let formattedValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(Number(value));

    return formattedValue;
}