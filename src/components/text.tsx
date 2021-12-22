import type { ReactNode } from "react"
import React from "react"

export type TextProps = {
  children?: ReactNode
}

export function Text(props: TextProps) {
  return (
    <reacord-element createNode={() => ({ type: "textElement", children: [] })}>
      {props.children}
    </reacord-element>
  )
}