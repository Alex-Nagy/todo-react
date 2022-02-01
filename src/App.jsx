import { useState } from "react";
import "./App.css";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  
  const postBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: "Cím1", content: "Tartalom 1", date: "Dátum 1" },
    ]);
  };

  return (
    <main className="App">
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Content" />
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
          <button>Remove</button>
        </article>
      ))}
    </main>
  );
}

export default App;
