import TransactionForm from "@/components/TransactionForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Personal Finance Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Track your income and expenses in one place.
          </p>
        </div>

        <TransactionForm />
      </div>
    </main>
  );
}
