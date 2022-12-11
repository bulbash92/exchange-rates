const api = `https://www.nbrb.by/api/exrates`

export const CurrencyApi = {
  getDynamicsExchange: async (id, startDate, endDate) => {
    try {
      const response = await fetch(`${api}/rates/dynamics/${id}?startDate=${startDate}&endDate=${endDate}`)
      const data = await response.json()
      return data.map(d => ({
        name: d.Date.slice(0, 10),
        rate: d.Cur_OfficialRate,
      }))
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  getCurrencyListHandler: async (checkDate) => {
    try {
      const response = await fetch(`${api}/rates?ondate=${checkDate}&periodicity=0`)
      const data = await response.json()
      return data.map(d => ({
        label: d.Cur_Abbreviation,
        value: d.Cur_OfficialRate,
        scale: d.Cur_Scale,
        name: d.Cur_Name,
      }))
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
