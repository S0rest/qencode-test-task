import { URL_DEV_API } from '@/util/const'
import axios from 'axios'

export default axios.create({
	baseURL: URL_DEV_API
})
