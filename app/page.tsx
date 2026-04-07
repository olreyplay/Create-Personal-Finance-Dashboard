"use client";

import { useState } from "react";
import TransactionForm from "@/components/TransactionForm";
import TransactionCard from "@/components/TransactionCard";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
};

const categories = ["Food", "Rent", "Salary", "Transport", "Entertainment"];

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Omit<Transaction, "id">) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
    };

    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  };

  const balance = transactions.reduce((total, transaction) => {
    return transaction.type === "income"
      ? total + transaction.amount
      : total - transaction.amount;
  }, 0);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Personal Finance Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Track your income and expenses in one place.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Balance</p>

          <h2
            className={`mt-2 text-2xl font-semibold ${
              balance >= 0 ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            ${balance.toLocaleString()}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[380px,1fr]">
          <TransactionForm
            onAddTransaction={handleAddTransaction}
            categories={categories}
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Transactions
            </h2>

            <div className="mt-5 space-y-3">
              {transactions.map((transaction) => (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
