type TransactionCardProps = {
  transaction: {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
  };
};

export default function TransactionCard({ transaction }: TransactionCardProps) {
  const isIncome = transaction.type === "income";

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-slate-900">{transaction.title}</h3>

          <p className="mt-1 text-sm text-slate-500">
            {transaction.category} • {transaction.type}
          </p>
        </div>

        <p
          className={`text-sm font-semibold ${
            isIncome ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {isIncome ? "+" : "-"}${transaction.amount}
        </p>
      </div>
    </div>
  );
}
