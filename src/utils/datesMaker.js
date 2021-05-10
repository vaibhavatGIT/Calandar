const lastDayCalc = (date, month, flag = true) => {
  return new Date(
    date.getFullYear(),
    flag ? month + 1 : month,
    0
  )
}

export { lastDayCalc };