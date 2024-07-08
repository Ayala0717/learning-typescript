import { RootPhotos } from '../types/model/Photos'
import { UserRoot } from '../types/model/User'
import { apiService } from '../utils/api'

const endpoint = 'phoyd'

export const { index } = apiService<RootPhotos>(endpoint)
