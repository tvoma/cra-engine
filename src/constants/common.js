const MONTHS = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre'
]

const DAY = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNEYSDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
}

const WEEKDAY_FR = {
    [DAY.MONDAY]: 'Lundi',
    [DAY.TUESDAY]: 'Mardi',
    [DAY.WEDNEYSDAY]: 'Mercredi',
    [DAY.THURSDAY]: 'Jeudi',
    [DAY.FRIDAY]: 'Vendredi',
    [DAY.SATURDAY]: 'Samedi',
    [DAY.SUNDAY]: 'Dimanche',
}

export { MONTHS, DAY, WEEKDAY_FR }
