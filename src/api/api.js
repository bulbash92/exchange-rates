const api = `https://www.nbrb.by/api/exrates`

export const CurrencyApi = {
  getDynamicsExchange: async (id, startDate, endDate) => {
    try {
      const response = await fetch(`${api}/rates/dynamics/${id}?startDate=${startDate}&endDate=${endDate}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  getCurrencyListHandler: async (checkDate) => {
    try {
      const response = await fetch(`${api}/rates?ondate=${checkDate}&periodicity=0`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
