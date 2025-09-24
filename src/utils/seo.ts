type Props = {
  title: string
  description?: string
  image?: string
  keywords?: string
}

export function seo(props: Props) {
  const tags = [
    { title: props.title },
    { name: "description", content: props.description },
    { name: "keywords", content: props.keywords },
    { name: "twitter:title", content: props.title },
    { name: "twitter:description", content: props.description },
    { name: "twitter:creator", content: "@" },
    { name: "twitter:site", content: "@" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: props.title },
    { name: "og:description", content: props.description },
  ]

  if (props.image !== undefined) {
    tags.push(
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: props.image },
      { name: "og:image", content: props.image },
    )
  }

  return tags
}
