import { useState } from 'react';

export default function CommentsForm(){
    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event)=> {
        setFormData((currData) => {
            return {...currData,
                [event.target.name]: event.target.value
            }
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }

    return(
        <>
            <div>
                <h4>Give a Comment!</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>&nbsp;
                    <input
                        placeholder="username"
                        type="text"
                        value={formData.username}
                        onChange={handleInputChange}
                        id='username'
                        name="username"
                    />
                    <br></br><br></br>

                    <label htmlFor='remarks'>Remarks</label>&nbsp;
                    <textarea
                        value={formData.remarks}
                        onChange={handleInputChange}
                        placeholder="Add a remark"
                        id='remarks'
                        name='remarks'
                        > Remarks</textarea>
                    <br></br>

                    <label htmlFor='rating'>Rating</label>&nbsp;
                    <input
                        placeholder="rating"
                        type="number"
                        value={formData.rating}
                        onChange={handleInputChange}
                        id="rating"
                        name="rating"
                        min={1}
                        max={5}
                    />
                    <br></br><br></br>
                    <button>Add Comments</button>
                </form>
            </div>
        </>
    )
}