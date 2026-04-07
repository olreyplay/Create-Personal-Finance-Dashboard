// ...

export default function Home() {
  // ...

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl p-6">
        <div className="mb-8">{/* ... */}</div>

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
          <TransactionForm onAddTransaction={handleAddTransaction} />
          {/* ... */}
        </div>
      </div>
    </main>
  );
}
