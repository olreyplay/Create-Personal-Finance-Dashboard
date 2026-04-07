"use client";

import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import MonthFilter from "@/components/MonthFilter";
import TransactionForm from "@/components/TransactionForm";
import TransactionCard from "@/components/TransactionCard";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
};

const categories = ["Food", "Rent", "Salary", "Transport", "Entertainment"];

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

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

  const handleResetFilters = () => {
    setSelectedCategory("");
    setSelectedMonth("");
  };

  const balance = transactions.reduce((total, transaction) => {
    return transaction.type === "income"
      ? total + transaction.amount
      : total - transaction.amount;
  }, 0);

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesCategory =
      selectedCategory === "" || transaction.category === selectedCategory;

    const matchesMonth =
      selectedMonth === "" || transaction.date.startsWith(selectedMonth);

    return matchesCategory && matchesMonth;
  });

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

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <CategoryFilter
              value={selectedCategory}
              onChange={setSelectedCategory}
              categories={categories}
            />

            <MonthFilter value={selectedMonth} onChange={setSelectedMonth} />
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing {filteredTransactions.length} transactions
            </p>

            <button
              onClick={handleResetFilters}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Reset Filters
            </button>
          </div>
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
              {filteredTransactions.map((transaction) => (
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
