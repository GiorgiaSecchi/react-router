export default function IndexPosts() {
  const apiUrl = import.meta.env.VITE_APP_URL;
  console.log("apiUrl:" + apiUrl);

  fetch(apiUrl + "/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="container py-5">
      <h1>Posts</h1>

      <div className="py-5">
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
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <a href="#">Mostra</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
