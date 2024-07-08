import { RootPhotos } from '../../types/model/Photos'
import { index as UserIndex } from '../../api/user'
import { index as PhotosIndex } from '../../api/photos'
import { filters } from '../../utils/filters'

const resposePhotos: RootPhotos = {
  albumId: 1,
  id: 1,
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  url: 'https://via.placeholder.com/600/92c952',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952'
}

async function fetchUser() {
  const { data } = await UserIndex()

  data.id
}

async function fetchPhotos() {
  const { data } = await PhotosIndex()

  data.thumbnailUrl
}

function createFilter() {
  const filter = filters(resposePhotos, 'thumbnailUrl')
}
