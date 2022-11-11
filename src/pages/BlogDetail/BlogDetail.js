import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "../../client.js"
import imageBuilder from "../../utils/imageBuilder.js"
import Loader from "../../components/Loader/Loader"

const BlogDetail = () => {
  const [post, setPost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          body,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
              }
          },
        }`,
        { slug }
      )
      .then((data) => setPost(data[0]))
  }, [slug])

  return (
    <>
      {!post ? (
        <Loader />
      ) : (
        <>
          <div className="relative h-96">
            <img
              src={imageBuilder(post.mainImage).width(3000).url()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-10">
            <h2 className="mt-4 uppercase tracking-widest text-xs text-gray-600">
              {new Date(post.publishedAt)
                .toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
                .replace(/ /g, " ")}
            </h2>
            <h1 className="font-display text-2xl md:text-3xl text-gray-900 mt-4">
              {post.title}
            </h1>
            <div className="prose prose-sm sm:prose lg:prose-lg mt-6">
              <BlockContent
                blocks={post.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default BlogDetail
