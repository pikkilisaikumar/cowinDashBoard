import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import Heading from './styledComponents'

const VaccinationByGender = props => {
  const {vacinationgender} = props
  //   console.log(vacinationgender)
  return (
    <div>
      <Heading>Vaccination by gender</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
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
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
