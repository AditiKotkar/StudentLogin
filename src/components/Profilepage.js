import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Profilepage.css';
import { Link} from 'react-router-dom';
function Profilepage() {
    return (
    <div className='profile-content'>
        <div className='profile-Profile'>
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className='profile-icon' /> </Link>
            <h1 className='profile-ProfileName'>Profile</h1>
        </div>
        <div className='profile-IMG'></div>
        <div className='profile-data'>
        <div className='profile-Dtext'>
        <form>
        <div>
            <label>Full Name : </label>
            <input type="text" name="stud_name" placeholder="profile-Name"/>
        </div>
        <div className='profile-Std'>
            <label>Standard: </label>
            <input type="text" name="stud_std" placeholder="Standard"/>
            <label>Division: </label>
            <input type="text" name="stud_rollno" placeholder="Roll Number"/>
        </div>
        <div>
            <label>Roll Number : </label>
            <input type="text" name="stud_div" placeholder="Division"/>
        </div>
        <div>
            <label>Mobile Number : </label>
            <input type="text" name="stud_phoneno" placeholder="Phone Number"/>
        </div>
        <div>
            <label>Birth Date : </label>
            <input type="date" name="stud_dob" placeholder="Date of Birth"  />
        </div>
        <div>
            <label>Email : </label>
            <input type="text" name="Mail" placeholder="Email" />
        </div>
        </form>
        </div>
        </div>
    </div>
    );       
};

export default Profilepage;
