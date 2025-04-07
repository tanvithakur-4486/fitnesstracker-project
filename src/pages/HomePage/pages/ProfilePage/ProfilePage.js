import React, { useEffect, useState } from "react";
import "./styles.css";
import { get, ref } from "firebase/database";
import { database } from "../../../../firebase";
import { RotatingLines } from "react-loader-spinner";

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getProfileData();
    }, []);

    const getProfileData = () => {
        get(ref(database, `users/${localStorage.getItem("uid")}`)).then(
          (snapshot) => {
            setUserData(snapshot.val());
            console.log("data get done", JSON.stringify(snapshot.val()));
          }  
        );
        return(
            <div className={profilePageBaseContainer}>
                <h1>Profile</h1>
                <div className="profileDataBaseContainer">
                    {isLoading ? (
                        <RotatingLines />
                    
                    ) : (
                        <div>{JSON.stringify(userData.uid)}</div>
                    )}
                </div>
            </div>
        );
    }
}   
    
