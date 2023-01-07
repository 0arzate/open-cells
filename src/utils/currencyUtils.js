export const USDFormat = (money) => {
  const currencyFormat = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return currencyFormat.format(money)
}
