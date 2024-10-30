import { useState } from "react";

export default function VenueAdd(){
const [venueData,setVenuetData]=useState ({
    venueId: 0,
      venueName: "",
      venueSeater: 0,
      isVenueAC: true,
      venueCity: "",
      venueState: ""
});

function handleFormSubmit(event){
    event.preventDefault();
    console.log(venueData);
}

const [venueErrorData,setVenueErrorData] = useState(
    {
        venueId: true,
      venueName: true,
      venueSeater: true,
      isVenueAC: true,
      venueCity: true,
      venueState: true
    }
);

function handleFormChange(event){
   
    //setgadgetData({...gadgetdata, prodCost:e.target.value}) - wont work
    setVenueErrorData({...venueErrorData, [event.target.name]: event.target.validity.valid});
    setVenuetData({...venueData,[event.target.name]:event.target.value});
   

}
    return(
        <>
        <div className="container m-5">
            <div className="card">
                <form onSubmit={(e)=>handleFormSubmit(e)}>
                    <div className="card-header bg-success text-light">
                        <h3>ADD A NEW VENUE</h3>
                    </div>
                    <div className="card-body">

                        <div className="form-control-group m-1">
                            <label htmlFor="vName" className="form-label">Venue Name:</label>
                            <input type="text" 
                            id="vName"
                            placeholder="Enter the name of the venue"
                            className="form-control"
                            required
                            name = "venueName"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{venueErrorData.venueName?"":"Venue name required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="vSeater" className="form-label">Venue Capacity:</label>
                            <input type="number" 
                            id="vSeater"
                            placeholder="Enter the capacity of the venue"
                            className="form-control"
                            required
                            name = "venueSeater"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{venueErrorData.venueSeater?"":"Venue seating info required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="vAc" className="form-label">Venue AC:</label>
                            <input type="text" 
                            id="vAc"
                            placeholder="Is the venue air-conditioned (T/F)"
                            className="form-control"
                            required
                            name = "venueAC"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{venueErrorData.isVenueAC?"":"Venue AC info required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="vCity" className="form-label">Venue City:</label>
                            <input type="text" 
                            id="vCity"
                            placeholder="Enter the city of the venue:"
                            className="form-control"
                            required
                            name = "venueCity"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{venueErrorData.venueCity?"":"Venue city required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="vState" className="form-label">Venue State:</label>
                            <input type="text" 
                            id="vState"
                            placeholder="Enter the city of the venue:"
                            className="form-control"
                            required
                            name = "venueState"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{venueErrorData.venueState?"":"Venue Staterequired!"}</div>
                        </div>

                        
                        <div className="card-footer bg-success text-light">
                            <button 
                            type="submit" 
                            className="btn btn-light text-success"
                           >ADD</button>
                            <button 
                            type="reset" 
                            className="btn btn-light text-success mx-5"
                            
                            >CLEAR</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
        
        </>
    );
}