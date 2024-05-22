function Transaction({name, amount, balance}) {
    return (
        <div className="transaction">
            <div className="transaction-infos">
                <p className="transaction-name">{name}</p>
                <p className="transaction-amount">{amount}</p>
                <p className="transaction-balance">{balance}</p>
            </div>
            <button className="transaction-button">View transactions</button>
        </div>
    )
}

export default Transaction