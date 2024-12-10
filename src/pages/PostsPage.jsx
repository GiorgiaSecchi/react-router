import Cards from "../components/Cards";

export default function PostsPage() {
  return (
    <div className="container py-5">
      <h1>Posts</h1>

      <div className="py-5">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
