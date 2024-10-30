import { useState } from "react";

export default function CohortList() {
  const [allCohorts, setAllCohorts] = useState([
    {
      cohortId: 201,
      cohortSize: 31,
      cohortVenueId: 0,
      cohortStack: "Java FDE with React",
      cohortStartDate: "2024-12-12",
      cohortDurationWeeks: 6,
      cohortSPOC: "Noufiya",
      cohortInstrucor: "Poongs",
    },
    {
      cohortId: 202,
      cohortSize: 31,
      cohortVenueId: 0,
      cohortStack: "Java FDE with Angular",
      cohortStartDate: "2024-12-12",
      cohortDurationWeeks: 6,
      cohortSPOC: "Noufiya",
      cohortInstrucor: "Anil",
    },
  ]);

  function handleView(cohortId) {
    console.log(cohortId);
  }
  function handleDelete(cohortId) {
    console.log(cohortId);
    let filterAllCohort = allCohorts.filter(
      (eachCohort) => eachCohort.cohortId != cohortId
    );
    setAllCohorts(filterAllCohort);
  }
  function handleEdit(cohortId) {
    console.log(cohortId);
  }
  let mappedAllCohorts = allCohorts.map((eachCohort) => (
    <tr>
      <td>{eachCohort.cohortId}</td>
      <td>{eachCohort.cohortSize}</td>
      <td>{eachCohort.cohortVenueId}</td>
      <td>{eachCohort.cohortStack}</td>
      <td>{eachCohort.cohortStartDate}</td>
      <td>{eachCohort.cohortDurationWeeks}</td>
      <td>{eachCohort.cohortSPOC}</td>
      <td>{eachCohort.cohortInstrucor}</td>

      <td>
        <button
          onClick={() => handleView(eachCohort.cohortId)}
          className="btn btn-primary"
        >
          VIEW
        </button>
      </td>
      <td>
        <button
          onClick={() => handleEdit(eachCohort.cohortId)}
          className="btn btn-success"
        >
          EDIT
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(eachCohort.cohortId)}
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
              <th>SIZE</th>
              <th>VENUE ID</th>
              <th>STACK</th>
              <th>START DATE</th>
              <th>DURATION</th>
              <th>POC</th>
              <th>INSTRUCTOR</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{mappedAllCohorts}</tbody>
        </table>
      </div>
    </>
  );
}
