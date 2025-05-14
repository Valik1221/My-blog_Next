import posts from "@/bd";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Мій блог</h1>
      {posts.map(post => (
      <div className="post" key={post.id}>
      <h2>{post.title}</h2>
      <p className="date">{post.date}</p>
      <p className="content">{post.content}</p>
    </div>    
      ))}
    </div>  
  );
}
