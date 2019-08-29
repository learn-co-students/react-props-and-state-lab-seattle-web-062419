import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType=event=> {
    this.setState({
     filters:{ type:event.target.value}
  
  })
  }

  findPetsClick = () => {
    if(this.state.filters.type === "all") {
      fetch("/api/pets")
      .then(res=> {
        return res.json()
      }).then(data => {
         this.setState({ pets:data})
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res=> {
        return res.json()
      }).then(data => {
         this.setState({ pets:data})
      })
    }
   
  
  }

  adoptPet=(id) => {
     this.setState(prevState =>{
       let newPets = prevState.pets;
       newPets.map(pet => {
         if(pet.id === id) {
         return   pet.isAdopted = true;
         }
       })
       return {pets: newPets};
     })
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType}
              onFindPetsClick={this.findPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
               onAdoptPet={this.adoptPet}
        
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
