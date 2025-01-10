import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.tableTitle}>
                <tr>
                    <th className={css.headItems}>Type</th>
                    <th className={css.headItems}>Amount</th>
                    <th className={css.headItems}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableText}>
                {items.map((trans) => {
                    return (
                        <tr key={trans.id} className={css.row}>
                            <td className={css.type}>{trans.type}</td>
                            <td className={css.amount}>{trans.amount}</td>
                            <td className={css.currency}>{trans.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory;