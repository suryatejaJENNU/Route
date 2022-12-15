//  title: 'My fifth post',
// description: 'A high quality solution beautifully designed for startups',
// publishedDate

import './index.css'

const BlogItem = props => {
  const {items, key} = props
  const {id, title, description, publishedDate} = items
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogItem
