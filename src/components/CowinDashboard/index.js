import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LoadingView from './styledComponents'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusChange = {
  intial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    cowinDashData: {},
    apiStatus: apiStatusChange.intial,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    this.setState({apiStatus: apiStatusChange.loading})
    const httpMethod = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, httpMethod)
    if (response.ok === true) {
      const jsonData = await response.json()
      console.log(jsonData)
      const vacinationdata = {
        last7DaysVaccination: jsonData.last_7_days_vaccination,
        vaccinationByAge: jsonData.vaccination_by_age,
        vaccinationByGender: jsonData.vaccination_by_gender,
      }
      const {
        last7DaysVaccination,
        vaccinationByAge,
        vaccinationByGender,
      } = vacinationdata
      const last7daysdata = last7DaysVaccination.map(each => ({
        dose1: each.dose_1,
        dose2: each.dose_2,
        vaccineDate: each.vaccine_date,
      }))

      const overallData = {
        lastsevenvaccination: last7daysdata,
        vaccinationage: vaccinationByAge,
        vacinationgender: vaccinationByGender,
      }

      this.setState({
        cowinDashData: overallData,
        apiStatus: apiStatusChange.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusChange.failure,
      })
    }
  }

  rendersuccess = () => {
    const {cowinDashData} = this.state
    const {
      lastsevenvaccination,
      vacinationgender,
      vaccinationage,
    } = cowinDashData

    return (
      <>
        <div className="vacination-coverage-container">
          <VaccinationCoverage lastsevenvaccination={lastsevenvaccination} />
        </div>
        <div className="vacination-coverage-container">
          <VaccinationByGender vacinationgender={vacinationgender} />
        </div>

        <div className="vacination-coverage-container">
          <VaccinationByAge vaccinationage={vaccinationage} />
        </div>
      </>
    )
  }

  renderloading = () => (
    <LoadingView data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoadingView>
  )

  renderfailure = () => (
    <div className="tail-loader-container-one1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-styling"
      />
      <h1 className="someting-went-wrong-heading">Something went wrong</h1>
    </div>
  )

  render() {
    const {apiStatus} = this.state

    let vacination

    switch (apiStatus) {
      case apiStatusChange.success:
        vacination = this.rendersuccess()
        break
      case apiStatusChange.failure:
        vacination = this.renderfailure()
        break
      case apiStatusChange.loading:
        vacination = this.renderloading()
        break
      default:
        vacination = null
    }

    return (
      <div className="background-overall-container-one">
        <div className="website-logo-container-one">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo-styling"
          />
          <p className="co-win-paragraph">Co-WIN</p>
        </div>
        <h1 className="cowin-vacination-india-paragraph">
          CoWIN Vaccination in India
        </h1>
        {vacination}
      </div>
    )
  }
}

export default CowinDashboard
