import css from 'components/TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => (
    <section className={`${css.transactionSection}`}>
    <table className={`${css.transactionTable}`}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
  
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
  
  export default TransactionHistory;