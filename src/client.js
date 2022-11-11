import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "8wxl96qw",
  dataset: "production",
  useCdn: true,
})
