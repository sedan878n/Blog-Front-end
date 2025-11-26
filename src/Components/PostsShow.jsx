export function PostsShow(props) {
  const hanldleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    props.onUpdate(props.blog, params);
    form.reset;
  };

  return (
    <div id="posts-show">
      <h2>{props.blog.title}</h2>
      <p>{props.blog.body}</p>
      <hr />
      <h2> Edit Blog Post</h2>
      <form onSubmit={hanldleSubmit}>
        <div>
          Title :<input name="title" defaultValue={props.blog.title} type="text" />
        </div>
        <div>
          Body :<input body="body" defaultValue={props.blog.body} type="text" />
        </div>
        <div>
          Image :<input name="image" defaultValue={props.blog.image} type="text" />
        </div>
        <button type="submit"> Update Blog </button>
      </form>
      <button onClick={() => props.onDestroy(props.blog)}> Delete Blog Post </button>
    </div>
  );
}
