import { isWeekend } from "./check"

const mapDays = (activities, setter) => {
    return activities.map((activity, index) => {
        const { day, worked } = activity
        const isDayOfWeekend = isWeekend(day)

        const cloneActivities = structuredClone(activities)
        cloneActivities[index].worked = !worked

        const onChange = () => setter(current => ({ ...current, activities: cloneActivities }))

        return (
            <div key={ index } className="flex flex-col items-center">
                <p className="text-sm mb-2">{ day }</p>
                <input className='checkbox checkbox-solid-success checkbox-xl ' type='checkbox' disabled={ isDayOfWeekend } checked={ worked } onChange={ onChange } />
            </div>
        )
    })
}

export { mapDays }
