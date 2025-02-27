import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'
import searchPhotosFetch from './utils'

export const useFetchPhotos = () => {
  const { searchQuery } = useGlobalContext()
  const { isPending, data, isError } = useQuery({
    queryKey: ['photos', searchQuery],
    queryFn: async () => {
      const { data } = await searchPhotosFetch.get(
        `/?client_id=${import.meta.env.VITE_API_KEY}&query=${searchQuery}`
      )
      return data
    },
  })
  return { isPending, isError, data }
}
