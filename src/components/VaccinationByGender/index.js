import {PieChart, Pie, Legend, Cell} from 'recharts'

import {Heading, ContainerOne} from './styledComponents'

const VaccinationByGender = props => {
  const {vacinationgender} = props
  return (
    <ContainerOne>
      <Heading>Vaccination by gender</Heading>
      <PieChart width={600} height={400}>
        <Pie
          cx="50%"
          cy="70%"
          data={vacinationgender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </ContainerOne>
  )
}

export default VaccinationByGender
