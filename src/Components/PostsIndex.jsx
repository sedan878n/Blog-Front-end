export function PostsIndex({ blogProps, onShow }) {
  return (
    <div id="posts-index">
      <h1>All {blogProps.length} Old Blog Posts</h1>

      {blogProps.map((blog) => (
        <div key={blog.id} className="blogs>">
          <h2>{blog.title}</h2>
          <img src={blog.image} />
          <p>{blog.body}</p>
          <button onClick={() => onShow(blog)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
