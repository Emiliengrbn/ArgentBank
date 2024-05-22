import Transaction from "../components/Transaction"

function Account() {
    return (
        <main className="bg-dark-blue">
            <div className="account-title">
                <h1>Welcome back <br /> Tony Jarvis!</h1>
                <button className="edit-name">Edit Name</button>
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