import { useState } from "react";




const Appointment = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return ( 
        <div className="appointment">
            {
                isLoggedIn ? (
                    <div className="knownPatient">
                    </div>
                ): 
                (
                    <div className="unknownPatient">
                        
                    </div>
                )
            }

        </div>
    );
}
 
export default Appointment;