import './world-clock.css'

function Clock(city,offset){
    var d = new Date();

    var utc = d.getTime()+(d.getTimezoneOffset()*60000);


    var nd = new Date(utc+(3600000*offset));

    return city , nd.toLocaleTimeString();

}
function World(){
    return(
    <section>
        <h1>World Clock</h1>
        <div className='rol'>
        <span className='city'>
            <h2>Viet Nam</h2>
            <p>{Clock('Viet Nam', '+7')}</p>
        </span>
        <span className='city'>
            <h2> United States</h2>
            <p>{Clock('Viet Nam', '-7')}</p>
        </span>
        <span className='city'>
            <h2>Palestine</h2>
            <p>{Clock('Viet Nam', '+2')}</p>
        </span>
        <span className='city'>
            <h2>Philippines</h2>
            <p>{Clock('Viet Nam', '+8')}</p>
        </span>
        </div>
        <div className='rol c'>
        <span className='city'>
            <h2>Serbia</h2>
            <p>{Clock('Viet Nam', '+1')}</p>
        </span>
        <span className='city'>
            <h2> Sweden</h2>
            <p>{Clock('Viet Nam', '+1')}</p>
        </span>
        <span className='city'>
            <h2> Thailand</h2>
            <p>{Clock('Viet Nam', '+7')}</p>
        </span>
        <span className='city'>
            <h2> Korean</h2>
            <p>{Clock('Viet Nam', '+9')}</p>
        </span>
        </div>
    </section>
    )
}
export default World;