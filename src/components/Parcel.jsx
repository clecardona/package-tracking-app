// NPM packages
import Moment from "react-moment";

export default function Parcel({ id, parcel_id, eta, location_name, status }) {
  const estimatedArrivalDate = <Moment format="DD MMM YY">{eta}</Moment>;

  return (
    <li key={id}>
      <p> # {parcel_id} </p>
      <p>{status}</p>
      <p>{estimatedArrivalDate} </p>
      <p>{location_name} </p>
    </li>
  );
}
