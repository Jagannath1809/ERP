import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ orders }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (date) => {
    setSelectedDate(date);
  };

  const filteredOrders = orders.filter(
    (order) =>
      new Date(order.deliveryDate).toDateString() ===
      selectedDate.toDateString()
  );

  return (
    <>
      <div className="mx-10 flex flex-col md:flex-row justify-between">
        <div className="max-w-md mx-auto">
          <div className="max-w-md mx-auto my-4 bg-white shadow-md rounded-lg overflow-hidden mb-4 md:mb-0">
            <div className="px-4 py-3 bg-blue-500 text-white">
              <p className="text-3xl text-center font-bold">
                {filteredOrders.length}
              </p>
            </div>

            <div className="px-4 py-3 bg-gray-200">
              <h2 className="text-xl text-center">
                Orders due for delivery on <br />
                {selectedDate.toDateString()}
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-10 flex flex-col justify-center items-center md:items-start mb-4">
          <h1 className="font-bold mb-4 text-xl">Delivery Calendar</h1>
          <div className="w-full md:w-90">
            <Calendar
              onChange={onChange}
              value={selectedDate}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CalendarView;
