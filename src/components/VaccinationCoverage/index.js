import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import {Header, ContainerOne} from './styledComponents'

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
    <ContainerOne>
      <Header>Vaccination Coverage</Header>
      <BarChart
        data={lastsevenvaccination}
        margin={{
          top: 5,
        }}
        width={1000}
        height={400}
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
        <Bar
          dataKey="dose1"
          name="Dose1"
          fill="#1f77b4"
          barSize="30%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose2"
          fill="#f54394"
          barSize="30%"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ContainerOne>
  )
}

export default VaccinationCoverage
