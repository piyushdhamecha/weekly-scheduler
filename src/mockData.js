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
  endTime: 16,
  dateRange: _.map(dateRange, (date) => {
    return {
      date,
      progressList: [
        {
          name: "AM Sessions",
          backgroundColor: '#12BBAB',
          startTime: 9,
          endTime: 13,
          nestedProgressList: [
            { backgroundColor: '#008B9C', startTime: 9, endTime: 10 },
            { backgroundColor: 'red', startTime: 10, endTime: 12 },
            { backgroundColor:'gray', startTime: 12, endTime: 13 }
          ]
        },
        {
          name: "Breakfast sessions",
          startTime: 14,
          endTime: 15,
          nestedProgressList: [
            { startTime: 14, endTime: 15 }
          ]
        }
      ]
    }
  })
}

