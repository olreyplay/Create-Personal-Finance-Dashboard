"use client";

import { useState } from "react";

type TransactionFormProps = {
  onAddTransaction: (transaction: {
    title: string;
    amount: number;
    type: string;
    category: string;
  }) => void;
};

export default function TransactionForm({
  onAddTransaction,
}: TransactionFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddTransaction({
      title,
      amount: Number(amount),
      type,
      category,
    });

    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("Food");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-slate-900">Add Transaction</h2>

      <div className="mt-5 space-y-4">
        <input
          type="text"
          placeholder="Transaction title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500"
          >
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}
