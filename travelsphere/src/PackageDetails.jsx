import { useParams } from "react-router-dom";

function PackageDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Package: {id}</h1>
      <p>This is the detailed description page.</p>
    </div>
  );
}

export default PackageDetails;