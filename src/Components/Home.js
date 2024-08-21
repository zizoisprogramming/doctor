import teeth from '../images/smiling_teeth.png'
import smile from '../images/smile-vector.png'
import "../CSS/Home.css"
import ImageDrawer from './ImageDrawer'


const Home = () => {

    const handleAppointment = () => {
        console.log("Appoitment requested")
    }

    const contact = () => {
        console.log("Contact requested")
    }

    return ( 
        <div className="home">
            <div className="intro">
                <h1>Welcome to Dr.Samer's clinic!</h1>
                <div className="display">
                    <h2>For a beatiful smile</h2>
                    <ImageDrawer className="smile"></ImageDrawer>
                </div>
                <div className="buttons">
                    <button className='make-appointment' onClick={handleAppointment}>Make an appointment</button>
                    <button className='contact' onClick={contact}>Contact Us</button>
                </div>
            </div>

            <img src={teeth} className="image" alt="teeth"></img>
        </div>
    );
}
 
export default Home;