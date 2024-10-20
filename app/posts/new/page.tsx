import React from 'react'
import {Metadata} from "next";
import NewPost from './NewPost';

export const metadata: Metadata = {
    title: "Post a Content"
}

export default function Page() {
  return (
    <NewPost/>
  )
}
