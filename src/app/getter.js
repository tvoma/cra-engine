import { MONTHS } from "@/constants/common"

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

const getCurrentMonth = () => {
    const monthKey = date.getMonth()

    return MONTHS[monthKey]
}

const getActivities = () => {
    const nbrDays = getNbrDays()
    const daysInMonth = Array(nbrDays)

    return Array.from(daysInMonth, (_, key) => ({ day: key + 1, worked: false }))
}

export { getCurrentMonth, getNbrDays, getDayOfWeek, getActivities }
