import { useState } from "react";

export default function VenueList() {
  const [allVenues, setAllVenues] = useState([
    {
      venueId: 101,
      venueName: "Cholas",
      vanueSeater: 35,
      isVenueAC: true,
      venueCity: "Trivandrum",
      venueState: "Kerala",
    },
    {
      venueId: 102,
      venueName: "Pandavas",
      vanueSeater: 35,
      isVenueAC: true,
      venueCity: "Trivandrum",
      venueState: "Kerala",
    }
  ]);

  function handleView(venueId){
    console.log(venueId);
  }
  function handleDelete(venueId){
    console.log(venueId);
    let filterAllVenues = allVenues.filter((eachVenue) => eachVenue.venueId != venueId);
    setAllVenues(filterAllVenues);
  }
  function handleEdit(venueId){
    console.log(venueId);
  }
  let mappedAllVenues = allVenues.map((eachVenue) => (
    <tr>
      <td>{eachVenue.venueId}</td>
      <td>{eachVenue.venueName}</td>
      <td>{eachVenue.vanueSeater}</td>
      <td>{eachVenue.isVenueAC?"Yes":"NO"}</td>
      <td>{eachVenue.venueCity}</td>
      <td>{eachVenue.venueState}</td>
      <td>
        <button
          onClick={() => handleView(eachVenue.venueId)}
          className="btn btn-primary"
        >
          VIEW
        </button>
      </td>
      <td>
        <button
          onClick={() => handleEdit(eachVenue.venueId)}
          className="btn btn-success"
        >
          EDIT
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(eachVenue.venueId)}
          className="btn btn-danger"
        >
          DELETE
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <div className="container m-5">
        <h3>LIST of VENUES</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CAPACITY</th>
              <th>AC</th>
              <th>CITY</th>
              <th>STATE</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mappedAllVenues}
          </tbody>
        </table>
      </div>
    </>
  );
}
