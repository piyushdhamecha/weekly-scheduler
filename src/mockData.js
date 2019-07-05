import moment from 'moment'

export default {
  startTime: 8,
  endTime: 15,
  startDate: moment().startOf('week'),
  endDate: moment().endOf('week'),
}
