import { useState } from 'react';

export default function Form () {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData,
                [event.target.name] : event.target.value
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName:"",
            userName:"",
            password:"",
        });
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input  type="text"
                    placeholder="enter full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    id="fullName"
                    name="fullName"
                />

                <br></br><br></br>
                <label htmlFor="userName">User Name</label>
                <input  type="text"
                    placeholder="enter full name"
                    value={formData.userName}
                    onChange={handleInputChange}
                    id="userName"
                    name="userName"
                />

                <br></br><br></br>
                <label htmlFor="password">Password</label>
                <input  type="password"
                    placeholder="enter password"
                    value={formData.password}
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                />
                <button>Submit</button>
            </form>
        </>
    )
}