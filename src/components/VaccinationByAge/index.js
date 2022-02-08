import {PieChart, Pie, Legend, Cell} from 'recharts'

import {Heading, FirstContainer} from './styledComponents'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationage} = props
  return (
    <FirstContainer>
      <Heading>Vaccination by Age</Heading>
      <PieChart width={700} height={400}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationage}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </FirstContainer>
  )
}

export default VaccinationByAge
