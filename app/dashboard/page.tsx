"use client";

import { useMemo, useState } from "react";

const initialAccounts = [
  { id: 1, name: "Checking", balance: 18420.76, color: "blue" },
  { id: 2, name: "Savings", balance: 42100.44, color: "green" },
  { id: 3, name: "Travel", balance: 3100.0, color: "gold" },
];

const initialTransactions = [
  { id: 1, title: "Salary deposit", type: "credit", amount: 4200.0, date: "Today, 09:15" },
  { id: 2, title: "Groceries", type: "debit", amount: 128.42, date: "Today, 07:42" },
  { id: 3, title: "Transfer to Maya", type: "debit", amount: 350.0, date: "Yesterday" },
  { id: 4, title: "Coffee shop", type: "debit", amount: 18.5, date: "Mon" },
];

export default function DashboardPage() {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [selectedAccountId, setSelectedAccountId] = useState(1);
  const [recipient, setRecipient] = useState("Maya Chen");
  const [amount, setAmount] = useState("250");
  const [status, setStatus] = useState<string | null>(null);

  const selectedAccount = useMemo(
    () => accounts.find((account) => account.id === selectedAccountId) ?? accounts[0],
    [accounts, selectedAccountId]
  );

  const handleTransfer = (event: React.FormEvent) => {
    event.preventDefault();

    const parsedAmount = Number(amount);

    if (!recipient.trim() || !parsedAmount || parsedAmount <= 0) {
      setStatus("Please enter a valid recipient and transfer amount.");
      return;
    }

    if (parsedAmount > selectedAccount.balance) {
      setStatus("Insufficient funds in the selected account.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: `Transfer to ${recipient}`,
      type: "debit",
      amount: parsedAmount,
      date: "Now",
    };

    setTransactions((current) => [newTransaction, ...current]);
    setAccounts((current) =>
      current.map((account) =>
        account.id === selectedAccount.id
          ? { ...account, balance: Number((account.balance - parsedAmount).toFixed(2)) }
          : account
      )
    );
    setStatus(`Transfer sent: $${parsedAmount.toFixed(2)} to ${recipient}.`);
    setAmount("");
    setRecipient("");
  };

  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-group sidebar-brand">
          <div className="brand-mark">N</div>
          <span>Northstar</span>
        </div>

        <nav className="sidebar-nav">
          <a className="active" href="#">Overview</a>
          <a href="#">Accounts</a>
          <a href="#">Cards</a>
          <a href="#">Transfers</a>
          <a href="#">Insights</a>
        </nav>
      </aside>

      <section className="content-panel">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Good morning</p>
            <h1>Welcome back, Jordan</h1>
          </div>
          <button className="primary-btn">+ New transfer</button>
        </header>

        <div className="account-grid">
          {accounts.map((account) => (
            <button
              type="button"
              key={account.id}
              className={`account-card ${selectedAccountId === account.id ? "selected" : ""}`}
              onClick={() => setSelectedAccountId(account.id)}
            >
              <div className={`dot ${account.color}`} />
              <span>{account.name}</span>
              <strong>${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong>
            </button>
          ))}
        </div>

        <div className="main-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Quick transfer</h2>
            </div>

            <form className="transfer-form" onSubmit={handleTransfer}>
              <label>
                Recipient
                <input
                  type="text"
                  value={recipient}
                  onChange={(event) => setRecipient(event.target.value)}
                  placeholder="Enter name"
                />
              </label>

              <label>
                Amount
                <input
                  type="number"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </label>

              <div className="transfer-meta">
                <span>Available: ${selectedAccount.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                <span>Fee: $0.00</span>
              </div>

              <button type="submit" className="primary-btn full-width">Send transfer</button>

              {status ? <p className="status-message">{status}</p> : null}
            </form>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Recent activity</h2>
              <a href="#">View all</a>
            </div>

            <ul className="transaction-list">
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <div>
                    <strong>{transaction.title}</strong>
                    <span>{transaction.date}</span>
                  </div>
                  <b className={transaction.type === "credit" ? "credit-text" : "debit-text"}>
                    {transaction.type === "credit" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                  </b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
