import { UserRoot } from '../types/model/User'
import { apiService } from '../utils/api'

const endpoint = 'adsada'

export const { index } = apiService<UserRoot>(endpoint)
