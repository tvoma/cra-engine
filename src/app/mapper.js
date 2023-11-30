import { useId } from "react"
import { WEEKDAY_FR } from "@/constants/common"
import { cutStr } from "@/lib/utils"
import { isWeekend } from "./check"
import { getDayOfWeek } from "./getter"

const mapDays = (activities, setter) => activities.map((activity, index) => {
    const id = useId()
    const { day, worked } = activity
    const isDayOfWeekend = isWeekend(day)
    const dayOfWeek = getDayOfWeek(day)
    const weekday = cutStr(WEEKDAY_FR[dayOfWeek], '.')

    const cloneActivities = structuredClone(activities)
    cloneActivities[index].worked = !worked

    const onChange = () => setter(current => ({ 
        ...current, 
        nbrDays: cloneActivities.filter(activity => !!activity.worked).length,
        activities: cloneActivities 
    }))

    return (
        <div key={ index } className="flex flex-col items-center">
            <label 
                for={ id } 
                className={`text-sm mb-2 text-xs ${ isDayOfWeekend ? 'cursor-not-allowed' : 'cursor-pointer' } ${ isDayOfWeekend && 'text-slate-600' }`}>
                { weekday } { day }
            </label>
            <input
                id={ id }
                className='checkbox checkbox-solid-success checkbox-xl ' 
                type='checkbox' 
                disabled={ isDayOfWeekend } 
                checked={ worked } 
                onChange={ onChange } 
            />
        </div>
    )
})

export { mapDays }
