import { useState } from "react";
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            console.log('Blog post added')
            history.push('/')
        })
    }

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          placeholder="Enter text here..."
          value={body}
          style={{ height: "200px", width: "400px", marginTop: "10px" }}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="victor">Victor</option>
          <option vaue="ben">Ben</option>
        </select>
        {!isPending ? <button>Add Blog</button> : <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
