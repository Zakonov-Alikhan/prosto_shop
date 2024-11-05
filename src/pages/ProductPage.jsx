import { useParams } from "react-router-dom";

export default function ProductPage() {
  const router = useParams();
  console.log(router);
  return (
    <main>
      <h1>Product Page...</h1>
    </main>
  );
}
