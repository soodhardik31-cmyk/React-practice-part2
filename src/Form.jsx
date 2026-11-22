import { useState } from 'react';

export default function Form () {
    const [fullName, setFullName] = useState("Hardik");

    let handleNameChange = (e) => {
        setFullName(e.target.value);
    }
    return(
        <>
            <form>
                <label htmlFor="username">Full Name</label>
                <input  type="text"
                    placeholder="enter full name"
                    value={fullName}
                    onChange={handleNameChange}
                    id="username"/>
                <button>Submit</button>
            </form>
        </>
    )
}