import { useState } from "react";
import "./App.css";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: title, content: content, date: new Date().toString().substring(0, 25)},
    ]);
    setTitle("");
    setContent("");
  };

  const deleteBlogPosts = () => {
    setBlogPosts([]);
  };

  const removeBlogPost = (uid) => {

    /*     
    for (const blog of blogPosts) {
      if(blog.date !== uid){
        list.push(blog)
      }
    } 
    */

    setBlogPosts(blogPosts.filter((b) => b.date !== uid));
  };

  return (
    <main className="App">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={postBlogPost}>Post</button>
      <h1>Posts</h1>
      {blogPosts.map((blogPost, i) => (
        <article key={i}>
          <h2>{blogPost.title}</h2>
          <p>{blogPost.content}</p>
          <h5>{blogPost.date}</h5>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Content" />
          <button>Edit</button>
          <button>Save</button>
          <button>Cancel</button>
          <button onClick={() => removeBlogPost(blogPost.date)}>Remove</button>
        </article>
      ))}
      <button onClick={deleteBlogPosts} className="del-btn">Delete All</button>
    </main>
  );
}

export default App;
