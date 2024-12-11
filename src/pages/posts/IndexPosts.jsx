import { useEffect, useState } from "react";

export default function IndexPosts() {
  const [posts, setPosts] = useState([]);
  const apiUrl = import.meta.env.VITE_APP_URL;
  console.log("apiUrl:" + apiUrl);

  useEffect(() => {
    fetchPosts();
  }, []);

  //   const fetchPosts = () => {
  //     fetch(apiUrl + "/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };

  const fetchPosts = () => {
    fetch(apiUrl + "/posts")
      .then((res) => res.json())
      .then((data) => {
        const postsData = data.map((post) => ({
          id: post.id,
          titolo: post.titolo,
          immagine: post.immagine,
          tags: post.tags,
        }));

        console.log(postsData);
        setPosts(postsData);
      });
  };

  return (
    <div className="container py-5">
      <h1>Posts</h1>

      <hr />

      {posts.length > 0 ? (
        <div className="py-4">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Immagine</th>
                <th scope="col">Titolo</th>
                <th scope="col">Tags</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <img src={apiUrl + post.immagine} alt="IMG" width="70" />
                  </td>
                  <td>{post.titolo}</td>
                  <td>{post.tags}</td>
                  <td>
                    <a href="#">Mostra</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h5 className="mt-5">Non ci sono posts!</h5>
      )}
    </div>
  );
}

// {
//     "id": 1,
//     "titolo": "Ciambellone",
//     "contenuto": "Il ciambellone è un dolce profumato e soffice. Una torta da credenza semplice da realizzare, ideale da gustare a colazione oppure a merenda.",
//     "immagine": "/img/ciambellone.jpeg",
//     "tags": [
//         "cucina",
//         "ricetta",
//         "ciambellone"
//     ]
// },
