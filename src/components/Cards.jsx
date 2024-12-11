const apiUrl = import.meta.env.VITE_APP_URL;

export default function Cards({ titolo, immagine, tags, descrizione }) {
  return (
    <div class="card mb-3">
      <img src={apiUrl + immagine} class="card-img-top" alt={titolo} />
      <div class="card-body">
        <h5 class="card-title">{titolo}</h5>
        <p class="card-text">{descrizione}</p>
        <p class="card-text">
          <small class="text-body-secondary">{tags}</small>
        </p>
      </div>
    </div>
  );
}

{
  /* <div classNameName="card mb-3">
      <img src={apiUrl + immagine} classNameName="card-img-top " alt={titolo} />
      <div classNameName="card-body">
        <h5 classNameName="card-title">{titolo}</h5>
        <p classNameName="card-text">{descrizione}</p>
        <p classNameName="card-text">{tags.join(", ")}</p>
      </div>
    </div> */
}

{
  /* 
<div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={apiUrl + immagine}
            className="img-fluid rounded-start"
            alt={titolo}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titolo}</h5>
            <p className="card-text">{descrizione}</p>
            <p className="card-text">
              <small className="text-body-secondary">{tags}</small>
            </p>
          </div>
        </div>
      </div>
    </div> */
}
