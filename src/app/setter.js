const setCraInfo = (event, setter) => {
    const { name, value } = event.target

    if ('nbrDays' !== name)
        setter(current => ({ ...current, [name]: value }))

    return
}

export { setCraInfo }
