import { useParams } from "react-router-dom";

export default function ShowPosts() {
  console.log(useParams());

  return (
    <div className="container py-5">
      <h1>Dettaglio Post</h1>

      <div className="py-5"></div>
    </div>
  );
}
