import React from 'react'
import './index.css'
import Product from './Product'

class Inventory extends React.Component {
  constructor(props) {
      super(props)
      this.state = {shoes: []}
      this.nextId = this.nextId.bind(this)
      this.addProduct = this.addProduct.bind(this)
      this.update = this.update.bind(this)
      this.remove = this.remove.bind(this)
      this.eachShoe = this.eachShoe.bind(this)
  }
  componentWillMount() {
      if (this.props.count) {
          this.state = {shoes: [
              {
                  id: 0,
                  brand: "ETQ Amsterdam",
                  style: "Vortex",
                  size: 9,
                  upcId: "ETQ-3463"
              }, {
                  id: 1,
                  brand: "Maison Margiela",
                  style: "Future Leather High Top",
                  size: 12,
                  upcId: "MAI-4223"
              }, {
                  id: 2,
                  brand: "Hender Scheme",
                  style: "Homage",
                  size: 6,
                  upcId: "HEN-2151"
              }, {
                  id: 3,
                  brand: "Vans",
                  style: "Authentic Anti Social Social Club",
                  size: 10,
                  upcId: "VAN-2860"
              }, {
                  id: 4,
                  brand: "Nike",
                  style: "Air Jordon Flu Game",
                  size: 11.5,
                  upcId: "NIK-3515"
              }, {
                  id: 5,
                  brand: "Nike",
                  style: "Air Jordon Flu Game",
                  size: 11.5,
                  upcId: "NIK-3515"
              }, {
                  id: 6,
                  brand: "Nike",
                  style: "Foamposite One",
                  size: 8.5,
                  upcId: "NIK-1600"
              }, {
                  id: 7,
                  brand: "Common Projects",
                  style: "Achilles",
                  size: 11,
                  upcId: "COM-5648"
              }, {
                  id: 8,
                  brand: "Spalwart",
                  style: "Marathon Trail",
                  size: 11,
                  upcId: "SPA-4292"
              }, {
                  id: 9,
                  brand: "Filling Pieces",
                  style: "Mountain Cut",
                  size: 9.5,
                  upcId: "FIL-4814"
              }, {
                  id: 10,
                  brand: "Adidas",
                  style: "Yeezy Boost 350 V2 Zebra",
                  size: 9,
                  upcId: "ADI-2273"
              }, {
                  id: 11,
                  brand: "Nike",
                  style: "Air Vapormax CDG",
                  size: 7,
                  upcId: "NIK-5255"
              }, {
                  id: 12,
                  brand: "Reebok",
                  style: "Pumps",
                  size: 11.5,
                  upcId: "REE-5771"
              }, {
                  id: 13,
                  brand: "Balenciaga",
                  style: "Pleated High-Top",
                  size: 8.5,
                  upcId: "BAL-3764"
              }, {
                  id: 14,
                  brand: "Pharrell X Adidas",
                  style: "NMD Hu Trail",
                  size: 8.5,
                  upcId: "ADI-3591"
              }, {
                  id: 15,
                  brand: "Nike",
                  style: "Air Yeezy 2 Red October",
                  size: 10,
                  upcId: "NIK-7542"
              }, {
                  id: 16,
                  brand: "Nike",
                  style: "Air Jordan 12 Retro PSNY",
                  size: 7,
                  upcId: "NIK-6324"
              }, {
                  id: 17,
                  brand: "Vans",
                  style: "Old Skool Flame",
                  size: 12,
                  upcId: "VAN-6684"
              }, {
                  id: 18,
                  brand: "Rick Owens",
                  style: "Geobasket",
                  size: 10,
                  upcId: "RIC-8759"
              }, {
                  id: 19,
                  brand: "Saucony",
                  style: "Grid 9000 Premier Street Sweets",
                  size: 7.5,
                  upcId: "SAU-2400"
              }, {
                  id: 20,
                  brand: "Louis Vuitton",
                  style: "Run Away Supreme Red",
                  size: 11,
                  upcId: "LOU-0983"
              }, {
                  id: 21,
                  brand: "Diadora",
                  style: "N9000 Social Status Rio",
                  size: 10.5,
                  upcId: "DIA-0015"
              }, {
                  id: 22,
                  brand: "Puma",
                  style: "Blaze of Glory Bape",
                  size: 12,
                  upcId: "PUM-3256"
              }, {
                  id: 23,
                  brand: "Li-Ning",
                  style: "Way of Wade 4 All Star",
                  size: 8,
                  upcId: "LIN-1055"
              }, {
                  id: 24,
                  brand: "New Balance",
                  style: "997.5 Phantaci",
                  size: 10,
                  upcId: "NEW-8589"
              }
          ]}
      }
  }
  nextId() {
      this.uniqueId = this.uniqueId || 25
      return this.uniqueId++
  }
  addProduct(brandText) {
      var shoes = [
          ...this.state.shoes,
          {
              id: this.nextId(),
              brand: brandText
          }
      ]
      this.setState({shoes})
  }
  update(brandText, id) {
      var shoes = this.state.shoes.map(
          shoe => (shoe.id !== id) ? shoe : { ...shoe, brand: brandText }
      )
      this.setState({shoes})
  }
  remove(id) {
      var shoes = this.state.shoes.filter(shoe => shoe.id !== id)
      this.setState({shoes})
  }
  eachShoe(shoe) {
      return (<Product key={shoe.id}
                    id={shoe.id}
                    onChange={this.update}
                    onRemove={this.remove}>
                    {shoe.brand}
                    </Product>)
  }
  render() {
      return (<div className='inventory-container'>
          <h1>ShoeX Inventory</h1>
          {this.state.shoes.map(this.eachShoe)}
          <button onClick={() => this.addProduct('Add Brand Information')}>+</button>
      </div>)
  }
}

export default Inventory
