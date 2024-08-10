import teeth from '../images/smiling_teeth.png'
import "../CSS/Home.css"

const Home = () => {
    return ( 
        <div className="home">
            <div className="intro">
                <h1>Welcome to our dental clinic!</h1>
            </div>
            <img src={teeth} className="image" alt="teeth"></img>
        </div>
    );
}
 
export default Home;