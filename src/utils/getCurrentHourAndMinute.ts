export function getCurrentHourAndMinute() {

    return new Date().toLocaleTimeString('pt-BR', { hour: "2-digit", minute: '2-digit' })
}