import React from 'react';
import {useParams} from 'react-router-dom';
import {BlogDetails} from 'components';


export default function Blog() {

  const {id} = useParams()
 
  return (
    <div>
      <h1>Blog </h1>
      
      <BlogDetails/>
    </div>
  )
}
