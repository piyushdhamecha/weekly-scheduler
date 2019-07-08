import _ from 'lodash'
import moment from 'moment'

const startDate = moment().startOf('week')
const endDate = moment().endOf('week')
const dateDiff = moment(endDate).diff(moment(startDate), 'days')
const dateRange = []

for (let index = 0; index < dateDiff; index++) {
  dateRange.push(moment(startDate).add(index, "day"))
}

export default {
  startTime: 8,
  endTime: 15,
  dateRange: _.map(dateRange, (date) => {
    return {
      date,
      name: "AM Sessions",
      progressList: [
        {
          startTime: 9,
          endTime: 12,
          usedStartTime: 10,
          usedEndTime: 11
        },
        {
          startTime: 12,
          endTime: 15,
          usedStartTime: 12,
          usedEndTime: 15
        }
      ]
    }
  })
}

