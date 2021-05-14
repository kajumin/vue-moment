import * as moment from 'moment'

export default {
  format (val) {
    return moment(val).format('YYYY-MM-DD')
  }
}
