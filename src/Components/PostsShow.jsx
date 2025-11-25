export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>{props.blog.title}</h2>
      <p>{props.blog.body}</p>
    </div>
  )
}