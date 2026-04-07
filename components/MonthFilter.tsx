type MonthFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function MonthFilter({ value, onChange }: MonthFilterProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <label className="block text-sm font-medium text-slate-700">
        Filter By Month
      </label>

      <input
        type="month"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500"
      />
    </div>
  );
}
