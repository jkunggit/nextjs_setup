import Link from 'next/link'

const PostLink = props => (
  <li className='test'>
    <Link href='/dynamic/[id]' as={`/dynamic/${props.id}`}>
      <a className='testLink'>{props.id}</a>
    </Link>
  </li>
)

export default PostLink
