import {useState, useEffect } from "react";

export default useEffectComponent() {
    const [user, setUser] = useState({
        firstName: "Jennifer",
        lastName: "Smith",
        age: 30,
    });

    useEffect(() => {
        fetchFunction();
        console.log("User state has changed:", user);
    }, []);

    function fetchFunction() {
        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((data) => {
                const fetchedUser = data.results[0];
                setUser({
                    firstName: fetchedUser.name.first,
                    lastName: fetchedUser.name.last,
                    age: fetchedUser.dob.age,
                });
            })
            .catch((error) => console.error("Error fetching user:", error));
    }




}
