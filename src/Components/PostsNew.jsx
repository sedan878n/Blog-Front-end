export function PostsNew(props) {
  const handleSubmit = (event) =>{
    event.preventDefault();
    props.onCreate();
    const form = event.target;
    const params = new FormData(form);
    props.onCreate(params)
    form.reset();
    
  }

  return (
    <div id="posts-new">
      <h1>New Blog Post</h1>
      <form onSubmit={handleSubmit} >
        <div>
          Blog  Title : <input name="title" type="text" />
        </div>
        <div>
          Write Blog: <input name="body" type="text" />
        </div>
        <div>
          Add Image: <input name="image" type="text" />
        </div>
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
}