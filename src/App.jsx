import {BrowserRouter, Route, Routes} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import VenueList from "./Training/Venue/VenueList"
import CohortList from "./Training/Cohort/CohortList"
import HeaderApp from "./Training/HeaderTraining"
import ErrorComp from "./Error"
import JustaHeader from "./JustaHeader"
import CohortAdd from "./Training/Cohort/CohortAdd"
import VenueAdd from "./Training/Venue/VenueAdd"
function App() {
 

  return (
    <>
      <BrowserRouter>
      <JustaHeader></JustaHeader>
      
      <Routes>
      <Route path="/training" element={<HeaderApp></HeaderApp>}>
        <Route path="venue-list" element={<VenueList></VenueList>}></Route>
        <Route path="cohort-list" element={<CohortList></CohortList>}></Route>
        <Route path="cohort-add" element={<CohortAdd/>}></Route>
        <Route path="venue-add" element={<VenueAdd/>}></Route>
      </Route>
        
      <Route path='/*' element={<ErrorComp/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
