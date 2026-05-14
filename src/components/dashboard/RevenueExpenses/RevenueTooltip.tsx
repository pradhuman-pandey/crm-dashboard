interface TooltipProps {
  active?: boolean;

  payload?: any[];

  label?: string;
}

const RevenueTooltip = ({
  active,
  payload,
  label,
}: TooltipProps) => {
  if (
    active &&
    payload &&
    payload.length
  ) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-2
          shadow-lg
        "
      >
        <p
          className="
            mb-2
            font-semibold
            text-gray-700
          "
        >
          {label}
        </p>

        <p
          className="
            text-sm
            text-indigo-600
          "
        >
          Revenue:
          ${payload[0]?.value}
        </p>

        <p
          className="
            text-sm
            text-gray-500
          "
        >
          Expenses:
          ${payload[1]?.value}
        </p>
      </div>
    );
  }

  return null;
};

export default RevenueTooltip;