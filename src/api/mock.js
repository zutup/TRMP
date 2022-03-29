import Mock from 'mockjs'
import systemApi from './mockServerData/system'

Mock.mock('/api/system/getDate', systemApi.getStatisticalData)