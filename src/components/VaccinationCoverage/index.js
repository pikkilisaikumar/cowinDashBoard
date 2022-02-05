import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import Header from './styledComponents'

const VaccinationCoverage = props => {
  const {lastsevenvaccination} = props
  console.log(lastsevenvaccination)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div>
      <Header>Vaccination Coverage</Header>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={lastsevenvaccination}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 40,
            }}
          />
          <Bar dataKey="dose1" name="Dose1" fill="#1f77b4" barSize="30%" />
          <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="30%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
