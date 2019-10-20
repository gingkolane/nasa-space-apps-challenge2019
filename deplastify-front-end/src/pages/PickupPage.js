import React from 'react'
import { withRouter } from 'react-router'
import Header from '../components/Header'

class PickupPage extends React.Component {

  state = {
    form: false
  }

  render () {
  
  return(<>
    <Header/>
    {this.state.form ? (<div><h4 style={{'textAlign' : 'center', 'marginTop': '5%'}}>Enter New Pickup</h4><form style={{'maxWidth' : '450px', 'margin': '5% 0 0 25%'}}>
  <div class="form-group">
    <label for="date">Date</label>
    <input type="text" class="form-control" id="date" placeholder="MM/DD/YYYY"/>
  </div>
  <div class="form-group">
    <label for="site">Site</label>
    <select class="form-control" id="site">
      <option>Site 1</option>
      <option>Site 2</option>
      <option>Site 3</option>
      <option>Site 4</option>
      <option>Site 5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="weight">Weight</label>
    <input type="text" class="form-control" id="weight" placeholder="0 lbs"/>
  </div>
  <button>Upload Photos</button>
  <br/>
  <input class="btn btn-primary" style={{'margin': '5% 40%'}} type="submit" value="Submit"/>
</form></div>) : (<div><h4 style={{'textAlign' : 'center', 'marginTop': '5%'}}>My Pickups</h4> <ul class="list-group list-group-flush" style={{'margin': '5% 0 0 20%'}}>
  <div class="card w-75">
  <li class="list-group-item"><div class="card-body">
    <h5 class="card-title">07/18/19</h5>
    <p class="card-text">Site: site 2</p>
    <a href="#" class="btn btn-primary">See More</a>
  </div></li>
  <br/>
  <li class="list-group-item"><div class="card-body">
    <h5 class="card-title">06/14/19</h5>
    <p class="card-text">Site: site 4</p>
    <a href="#" class="btn btn-primary">See More</a>
    
  </div></li>
  <br/>
  <li class="list-group-item"><div class="card-body">
    <h5 class="card-title">05/20/19</h5>
    <p class="card-text">Site: site 5</p>
    <a href="#" class="btn btn-primary">See More</a>
    
  </div></li>
  <br/>
  </div>
  </ul></div>)}
    
    </>)
  }
}

export default withRouter(PickupPage)