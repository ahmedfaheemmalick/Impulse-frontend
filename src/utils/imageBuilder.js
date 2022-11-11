import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../client"

const builder = imageUrlBuilder(sanityClient)
const imageBuilder = (source) => builder.image(source)

export default imageBuilder
