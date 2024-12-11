import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPosts() {
  const apiUrl = import.meta.env.VITE_APP_URL;
  const postId = useParams().id;
  //   console.log(postId);

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (id) => {
    const url = `${apiUrl}/posts/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container py-5">
      <h1>Dettaglio Post</h1>

      <div className="py-5"></div>
    </div>
  );
}
