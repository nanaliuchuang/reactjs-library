import React from 'react'
import TemperatureControl from './TemperatureControl'

export default class TemperatureConverter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fromScale: "C", toScale: "F", fromTemperature: "0", toTemperature: "0"
        }
        this.temperatureConverterMapping = {
            C2F: this.celsiusToFahrenheit,
            C2K: this.celsiusToKelvin,
            F2C: this.FahrenheitToCelsius,
            F2K: this.FahrenheitToKelvin,
            K2C: this.kelvinToCelsius,
            K2F: this.kelvinToFahrenheit
        }
        this.handleFromTemperatureChange = this.handleFromTemperatureChange.bind(this)
        this.handleToTemperatureChange = this.handleToTemperatureChange.bind(this)
        this.handleFromScaleChange = this.handleFromScaleChange.bind(this)
        this.handleChangeToScaleChange = this.handleChangeToScaleChange.bind(this)
    }

    componentDidMount(){
        this.setState(state => ({toTemperature: this.convertTemperature(state.fromTemperature, 
            this.temperatureConverterMapping[state.fromScale+"2"+state.toScale])}))
    }
    

    handleFromTemperatureChange(temperature){
        this.setState(state => ({fromTemperature: temperature, toTemperature: this.convertTemperature(temperature, this.temperatureConverterMapping[state.fromScale+"2"+state.toScale])}))
    }

    handleToTemperatureChange(temperature){
        this.setState(state => ({toTemperature: temperature,
             fromTemperature: this.convertTemperature(temperature, this.temperatureConverterMapping[state.toScale+"2"+state.fromScale])}))
    }

    handleFromScaleChange(activeScale){
        this.setState(state => ({fromScale: activeScale,
             toTemperature: this.convertTemperature(state.fromTemperature, this.temperatureConverterMapping[activeScale+"2"+state.toScale])}))
    }

    handleChangeToScaleChange(activeScale){
        this.setState(state => ({toScale: activeScale, 
            toTemperature: this.convertTemperature(state.fromTemperature, this.temperatureConverterMapping[state.fromScale+"2"+activeScale])}))
    }

    convertTemperature(temperature, converter){
        let parsedTemperature = parseFloat(temperature)
        return converter(parsedTemperature)
    }

    celsiusToFahrenheit(temperature){
        return (temperature * 9/5) + 32
    }

    celsiusToKelvin(temperature){
        return temperature + 273.15
    }

    FahrenheitToCelsius(temperature){
        return (temperature - 32) * 5/9
    }

    FahrenheitToKelvin(temperature){
        return (temperature - 32) * 5/9 + 273.15
    }

    kelvinToCelsius(temperature){
        return temperature - 273.15
    }

    kelvinToFahrenheit(temperature){
        return (temperature - 273.15) * 9/5 + 32
    }

    render(){
        return (    
            <div className='container'>
                <TemperatureControl scale={this.state.fromScale} temperature={this.state.fromTemperature} onTemperatureChange={this.handleFromTemperatureChange} onScaleChange={this.handleFromScaleChange}/>
                <TemperatureControl scale={this.state.toScale} temperature={this.state.toTemperature} onTemperatureChange={this.handleToTemperatureChange} onScaleChange={this.handleChangeToScaleChange}/>
            </div>
        )
    }
}
