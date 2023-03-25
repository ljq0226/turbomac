import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
})
dayjs.updateLocale('zh-cn', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: '几秒前',
    // m: '一分钟前',
    // mm: '%d 分钟前',
    // h: '一小时前',
    hh: '',
    d: '昨天',
    dd: '%d 天前',
  },
})
dayjs.locale('zh-cn')

export default dayjs
