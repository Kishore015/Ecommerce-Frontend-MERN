import {useState,useEffect } from "react"
import axios from "axios";

const ProfilePage = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserprofile = async() => {
            try{
                const authToken = localStorage.getItem('authToken');
                const response = await axios.get('/api/users/profile', {
                    headers : {Authorization: `Bearer ${authToken}`}
                })
                setUser(response.data)
            }catch(err){
                console.log('Error while fetching user profile', err)
            }
        }
        fetchUserprofile();
    }, [])
    return(
       <div className="profile-page">
            <h2>user profile</h2>
            <>
                <p>Name: <span>{user.name}</span></p>
            </>
            <>
                <p>Email: <span>{user.email}</span></p>
            </>
       </div> 
    )
}

export default ProfilePage;