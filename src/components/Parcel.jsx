// NPM packages
import Moment from "react-moment";
import { Popover } from '@varld/popover';


export default function Parcel({information}) {
// constants
  const estimatedArrivalDate = <Moment format="DD MMM YY">{information.eta}</Moment>;
const lat = information.location_coordinate_latitude;
const lng= information.location_coordinate_longitude;
const location_URL = "https://maps.google.com/?q="+lat+","+lng;


  return (
    <li key={information.id}>
<Popover className="parcel-id"
        popover={({ visible, close }) => {
          return (
            <div className="popover">              
              <p>Sender : {information.sender} </p>                          
              <button onClick={close}>Close</button>
            </div>
          );
        }}
        >
      <button># {information.parcel_id} </button>
      </Popover>
      
      <p>{information.status}</p>
      <p>{estimatedArrivalDate} </p>
      <p><a href={location_URL} target="_blank" >  {information.location_name} </a> </p>

      

    </li>
  );
}
