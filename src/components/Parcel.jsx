import * as moment from 'moment'

export default function Parcel({id,parcel_id,user_name,eta,location_name,status} ){
    
    const estimatedArrivalDate = moment({eta}).format("DD MMM");

   

    return(        
        <li>      
                 
            <p> # {parcel_id} </p> 
            <p>{status}</p>  
            <p>{estimatedArrivalDate} </p>  
            <p>{location_name} </p>      
        
        </li>
    )
}