import { DAY } from "@/constants/common"
import { getDayOfWeek } from "./getter"

const isWeekend = dayInMonth => {
    const dayOfWeek = getDayOfWeek(dayInMonth)

    return dayOfWeek === DAY.SUNDAY || dayOfWeek === DAY.SATURDAY
}

export { isWeekend }
