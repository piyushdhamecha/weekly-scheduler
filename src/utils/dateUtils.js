import moment from 'moment'

export const getHourDiffBetweenTime = (startTime, endTime) => {
  const startTimeWithDate = moment().set({ hour: startTime, minute: 0, second: 0 })
  const endTimeWithDate = moment().set({ hour: endTime, minute: 0, second: 0 })
  const timeDuration = moment.duration(endTimeWithDate.diff(startTimeWithDate))

  return timeDuration.asHours()
}
