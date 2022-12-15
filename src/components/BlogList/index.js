import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {list} = props
  return (
    <ul>
      {list.map(each => (
        <BlogItem items={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
