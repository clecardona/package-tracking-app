// NPM packages
import Moment from "react-moment";

export default function Parcel({information}) {
// constants
  const estimatedArrivalDate = <Moment format="DD MMM YY">{information.eta}</Moment>;

  return (
    <li key={information.id}>
      <p className="parcel-id"> # {information.parcel_id} </p>
      <p>{information.status}</p>
      <p>{estimatedArrivalDate} </p>
      <p>{information.location_name} </p>
    </li>
  );
}
