import { useState } from "react";
import "./App.css";

const BlogPost = ({ blogPost, editBlogPost, removeBlogPost }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  return (
    <article>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <h5>{blogPost.date}</h5>
      <input
        type="text"
        placeholder="Title"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button
        onClick={() => {
          editBlogPost(blogPost.date, editTitle, editText);
          setEditTitle("");
          setEditText("");
        }}
      >
        Edit
      </button>
      <button>Save</button>
      <button>Cancel</button>
      <button onClick={() => removeBlogPost(blogPost.date)}>Remove</button>
    </article>
  );
};

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {
        title: title,
        content: content,
        date: new Date().toString().substring(0, 25),
      },
    ]);
    setTitle("");
    setContent("");
  };

  const editBlogPost = (uid, editTitle, editText) => {
    console.log(uid);
    const currenList = blogPosts;
    const nextList = [];
    // todo
    for (const post of currenList) {
      if (post.date !== uid) {
        nextList.push(post);
      } else {
        nextList.push({ title: editTitle, content: editText, date: post.date });
      }
    }
    setBlogPosts(nextList);
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
        <BlogPost
          key={i}
          blogPost={blogPost}
          editBlogPost={editBlogPost}
          removeBlogPost={removeBlogPost}
        />
      ))}
      <button onClick={deleteBlogPosts} className="del-btn">
        Delete All
      </button>
    </main>
  );
}

export default App;
