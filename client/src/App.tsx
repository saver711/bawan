import { useQuery } from "@tanstack/react-query"
import { request } from "./api/axiox-util"
import { StrapiWrapper } from "./api/models/strapi-wrapper"
import { StrapiError } from "./api/models/strapi-error"
import { AxiosResponse } from "axios"

type Blogger = {
  id: number
  attributes: {
    name: string
  }
}

function App() {

  const {
    data: bloggerData,
    error,
    isLoading,
  } = useQuery<AxiosResponse<StrapiWrapper<Blogger>, any>, StrapiError>({
    queryKey: ["home"],
    queryFn: () =>
      request.get<StrapiWrapper<Blogger>>("bloggers/1?populate=image"),
  })

  if (isLoading) {
    return <h1>loading...</h1>
  }
  if (error) {
    return <h1>{error.response.data.error.message}</h1>
  }

  return <>{bloggerData && bloggerData.data.data.attributes.name}</>
}

export default App
