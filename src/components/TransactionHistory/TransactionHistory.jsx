import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.title}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody key={items.id}>
                {items.map((item) => (
                    <>
                    <tr className={css.item}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                        </tr>
                    </>
            ))}
        </tbody>
        </table>

    )
}

export default TransactionHistory;