import { useState } from "react";

export default function CohortAdd(){
const [cohortdata,setCohortData]=useState ({
    cohortId: 0,
      cohortSize: 0,
      cohortVenueId: 0,
      cohortStack: "",
      cohortStartDate: "",
      cohortDurationWeeks: 0,
      cohortSPOC: "",
      cohortInstrucor: ""
});

function handleFormSubmit(event){
    event.preventDefault();
    console.log(cohortdata);
}

const [cohortErrorData,setCohortErrorData] = useState(
    {
        cohortId: true,
      cohortSize: true,
      cohortVenueId: true,
      cohortStack: true,
      cohortStartDate: true,
      cohortDurationWeeks: true,
      cohortSPOC: true,
      cohortInstrucor: true,
    }
);

function handleFormChange(event){
   
    setCohortErrorData({...cohortErrorData, [event.target.name]: event.target.validity.valid});
    setCohortData({...cohortdata,[event.target.name]:event.target.value});
   

}
    return(
        <>
        <div className="container m-5">
            <div className="card">
                <form onSubmit={(e)=>handleFormSubmit(e)}>
                    <div className="card-header bg-success text-light">
                        <h3>ADD A NEW COHORT</h3>
                    </div>
                    <div className="card-body">

                        <div className="form-control-group m-1">
                            <label htmlFor="cSize" className="form-label">Cohort Size:</label>
                            <input type="number" 
                            id="cSize"
                            placeholder="Enter the size of the Cohort"
                            className="form-control"
                            required
                            name = "cohortSize"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{cohortErrorData.cohortSize?"":"Cohort size required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="cVenueId" className="form-label">Cohort Venue ID:</label>
                            <input type="text" 
                            id="cVenueId"
                            placeholder="Enter the venue id of the Cohort"
                            className="form-control"
                            required
                            name = "cohortVenueId"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{cohortErrorData.cohortVenueId?"":"Cohort venue id required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="cs" className="form-label">Cohort Stack:</label>
                            <input type="text" 
                            id="cs"
                            placeholder="Enter the stack used within the Cohort"
                            className="form-control"
                            required
                            name = "cohortStack"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{cohortErrorData.cohortStack?"":"Cohort venue id required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="cd" className="form-label">Cohort Start Date:</label>
                            <input type="date" 
                            id="cd"
                            placeholder="Enter the start date of the Cohort"
                            className="form-control"
                            required
                            name = "cohortStartDate"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{cohortErrorData.cohortStartDate?"":"Cohort start date required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="cdu" className="form-label">Cohort duartion:</label>
                            <input type="text" 
                            id="cdu"
                            placeholder="Enter the duration of the Cohort"
                            className="form-control"
                            required
                            name = "cohortDurationWeeks"
                            onChange={(e)=>handleFormChange(e)}/>
                            <div className="text-danger small">{cohortErrorData.cohortDurationWeeks?"":"Cohort duration required!"}</div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="cp" className="form-label">Cohort POC:</label>
                            <input type="text" 
                            id="cp"
                            placeholder="Enter the P.O.C of the Cohort"
                            className="form-control"
                            onChange={(e)=>handleFormChange(e)}/>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="ci" className="form-label">Cohort Instructor:</label>
                            <input type="text" 
                            id="ci"
                            placeholder="Enter the Instructor of the Cohort"
                            className="form-control"
                            onChange={(e)=>handleFormChange(e)}/>
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