import { error } from '@sveltejs/kit';
import * as csvToJson from 'papaparse'

export async function load({ fetch }) {
  const response = await fetch('https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv')
  const data = await response.text()

  if (data) {
    const csvOptions = {
      header: true
    }
    const parsedData = csvToJson.parse(data, csvOptions)

    return {
      units: parsedData.data.map((entry) => ({
        id: entry.UNITID,
        name: entry.INSTNM,
        city: entry.CITY,
        st: entry.STABBR,
        url: entry.INSTURL
      }))
    }
  }

  return {}
}
