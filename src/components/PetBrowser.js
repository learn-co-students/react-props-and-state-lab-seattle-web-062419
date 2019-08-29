import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPet=()=>{
    return this.props.pets.map((pet,index) => {
      return <Pet pet={pet} 
      key={index}
      onAdoptPet={this.props.onAdoptPet}
      />
    })
  }
  render() {
    console.log(this.props.pets)
    return <div className="ui cards">
       {this.renderPet()}
    </div>
  }
}

export default PetBrowser
