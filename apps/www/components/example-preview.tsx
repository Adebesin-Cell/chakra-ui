"use client"

import dynamic from "next/dynamic"

interface Props {
  name: string
  scope?: "examples" | "ui"
}

function formatComponentName(name: string) {
  return name
    .replace("charts/", "")
    .replace("rich-text-editor/", "")
    .split(/[-\/]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

export const ExamplePreview = (props: Props) => {
  const { name, scope = "examples" } = props
  const componentName = formatComponentName(name)
  const Component = dynamic(
    () =>
      import(`../../compositions/src/${scope}/${name}`).then(
        (mod) => mod[componentName] || mod.default,
      ),
    { ssr: false },
  )
  return <Component />
}
