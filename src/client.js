import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "f0rmw1n8",
  dataset: "production",
  useCdn: true,
})
