export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All {props.blogProps.length} Old Blog Posts</h1>

      {props.blogProps.map((blog) => (
        <div key={blog.id} className="blogs>">
          <h2>{blog.title}</h2>
          <img src={blog.image} />
          <p>Post: {blog.body}</p>
          <button><a href={blog.link}>Read More</a></button>
        </div>
      ))}
    </div>
  );

}
