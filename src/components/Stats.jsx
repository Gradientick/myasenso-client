import React, { useState } from "react";

function Stats({ items }) {
  const [numberOfStocks, setNumberOfStocks] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  return (
    <div>
      <div className="bg-whitesmoke py-20 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Number of stocks
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {items.reduce(
                  (totalQuantity, item) => totalQuantity + item.quantity,
                  0
                )}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Total Earnings
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                ₱{totalEarnings}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Customer Feedback Rating
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                0 / 5
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Stats;
