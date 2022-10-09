import React from 'react'

const scaleMapping = {
    C: "Celsius",
    F: "Fahrenheit",
    K: "Kelvin"
}
export default  class TemperatureControl extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }

    handleSelectChange(e){
        this.props.onScaleChange(e.target.value)
    }

    render(){
        return (
            <div className='content'>
                <p>Temperature in {scaleMapping[this.props.scale]}</p>
                <select value={this.props.scale} onChange={this.handleSelectChange}>
                    <option value="C">Celsius</option>
                    <option value="F">Fahrenheit</option>
                    <option value="K">Kelvin</option>
                </select>
                <input type="number" value={this.props.temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}