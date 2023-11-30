import { MONTHS, MONTH_NUMBER } from "@/constants/common"

const date = new Date()

const getYear = () => date.getFullYear()

const getMonth = () => date.getMonth()

const getDayOfWeek = dayInMonth => {
    const year = getYear()
    const month = getMonth()
    const monthInYear = new Date(year, month, dayInMonth)

    return monthInYear.getDay()
}

const getNbrDays = () => {
    const year = getYear()
    const month = getMonth() + 1
    const nbrDays = new Date(year, month, 0).getDate();

    return nbrDays
}

const getCurrentMonth = () => MONTHS[getMonth()]

const getActivities = () => {
    const nbrDays = getNbrDays()
    const daysInMonth = Array(nbrDays)

    return Array.from(daysInMonth, (_, key) => ({ day: key + 1, worked: false }))
}

const getFilename = fullname => {
    const year = getYear()
    const month = MONTH_NUMBER[getMonth()]
    const name = fullname.toLowerCase().replace(' ', '-')

    return 'CRA-' + year + '-' + month + '-' + name
}

export { getCurrentMonth, getNbrDays, getDayOfWeek, getActivities, getFilename }
