import { useDispatch, useSelector } from "react-redux"
import Transaction from "../components/Transaction"
import { useRef, useState } from "react"
// import { APIService } from "../APIService"
import { modifyThunk } from "../redux/thunk/modifyThunk"

function Account() {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    
    const firstName = useSelector((state) => state.Profile.firstName)
    const lastName = useSelector((state) => state.Profile.lastName)
    const token = useSelector((state) => state.Login.token)

    const firstnameRef = useRef(firstName)
    const lastnameRef = useRef(lastName)

    const handleEditStore = () => {
        if (firstnameRef.current.value && lastnameRef.current.value) {
            dispatch(modifyThunk(token, firstnameRef.current.value, lastnameRef.current.value))
            
            setEdit(false)
        } else {
            alert("remplie les champs")
        }
    }

    return (
        <main className="bg-dark-blue">
            <div className="account-title">
                <h1>Welcome back</h1>
                {!edit ?
                    <>
                    <div className="name-container">
                        <p className="name-padding">{firstName}</p>
                        <p>{lastName}</p>
                        !
                    </div>
                    <button className="edit-name" onClick={() => setEdit(true)}>Edit Name</button>
                    </>
                :
                    <div className="edit-container">
                        <div className="input-edit-container">
                            <input type="text" placeholder={firstName} className="firstname-input" ref={firstnameRef} />
                            <input type="text" placeholder={lastName} className="lastname-input" ref={lastnameRef} />
                        </div>
                        <div className="edit-button">
                            <button className="save-button" onClick={handleEditStore}>Save</button>
                            <button className="cancel-button" onClick={() => setEdit(false)}>Cancel</button>
                        </div>
                    </div>
                }
            </div>
            <div className="transactions-container">
                <Transaction name="Argent Bank Checking (x8349)" amount="$2,082.79" balance="Available Balance"/>
                <Transaction name="Argent Bank Savings (x6712)" amount="$10,928.42" balance="Available Balance"/>
                <Transaction name="Argent Bank Credit Card (x8349)" amount="$184.30" balance="Current Balance"/>
            </div>
        </main>
    )
}

export default Account