import { doctors } from "../data/doctors";
import { useState, useEffect } from 'react';


function Homepage(){
    //Sets the state to use all the doctors available
    const [allDoctors, setAllDoctors] = useState(doctors);

    //Sets state to filter out the doctors
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);

    //Store doctors based on their rspecialization
    const [selectedSpecialty, setSelectedSpecialty] = useState(''); //Blank for the user to select from the dropdown

    useEffect(() => {
            if(selectedSpecialty === ''){
                setFilteredDoctors(allDoctors);
            }
            else{
                const filtered = allDoctors.filter(doc =>
                    doc.specialty === selectedSpecialty
                );

                setFilteredDoctors(filtered);
            }
        }, [selectedSpecialty, allDoctors]);

    
    function List(){
       return(
       <ul>
        {filteredDoctors.map(doc => (
            <li key = {doc.id}>
                 <p><b>{doc.name}</b></p>
            </li>
        ))}
       </ul>
       );
    }


    return(
        <div>
            <h1>Our Doctors</h1>
            
            <label htmlFor ="specialty-select">Choose doctor by specialization</label>
            <select
                id = "specialty-select"
                value = {selectedSpecialty}
                onChange = {(e) => setSelectedSpecialty(e.target.value)}
            >

                <option value = "">All</option>
                <option value = "Pediatrics">Pediatrics</option>
                <option value = "Cardiology">Cardiology</option>
                <option value = "Neurology">Neurology</option>
                <option value = "Trauma Surgeon">Trauma Surgeon</option>
                
            </select>

            <List />

        </div>
    )

}

export default Homepage;