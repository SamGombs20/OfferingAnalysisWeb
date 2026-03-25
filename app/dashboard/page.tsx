"use client";

import { useState } from "react";
import AttendancePieChart from "../components/attendance_pie_chart";
import AttendanceChart from "../components/attendance_trend_chart";
import OfferingsChart from "../components/offering_bar_chart";
import { Dialog, DialogPanel } from "@headlessui/react";
import CollectDataForm from "../components/collect_dialog";

const cardData = [
  {
    title: "Attendance",
    icon: (
      <>
        <path
          fill="currentColor"
          d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
        ></path>{" "}
        <path
          fill="currentColor"
          d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
        ></path>{" "}
        <path
          fill="currentColor"
          d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
        ></path>{" "}
        <path
          fill="currentColor"
          d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
        ></path>{" "}
        <path
          fill="currentColor"
          d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
        ></path>{" "}
        <path
          fill="currentColor"
          d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
        ></path>
      </>
    ),
    details: "250",
  },
  {
    title: "Total Offerings",
    icon: (
      <>
        <path
          fillRule="evenodd"
          d="M22 12.9342C22 12.956 22 12.978 22 13L22 15C22 15.022 22 15.044 22 15.0658C22 15.9523 22.0001 16.7161 21.9179 17.3278C21.8297 17.9833 21.631 18.6117 21.1213 19.1213C20.6117 19.631 19.9833 19.8297 19.3278 19.9179C18.7161 20.0001 17.9523 20.0001 17.0658 20L10.9342 20C10.0477 20.0001 9.28386 20.0001 8.6722 19.9179C8.01669 19.8297 7.38834 19.631 6.87867 19.1213C6.36901 18.6117 6.17027 17.9833 6.08214 17.3278C5.9999 16.7161 5.99994 15.9523 5.99999 15.0658L5.99999 12.9342C5.99994 12.0477 5.9999 11.2839 6.08214 10.6722C6.17027 10.0167 6.36901 9.38835 6.87867 8.87868C7.38834 8.36902 8.01669 8.17028 8.6722 8.08214C9.28386 7.99991 10.0477 7.99995 10.9342 8L17 8C17.022 8 17.044 8 17.0658 8C17.9523 7.99995 18.7161 7.99991 19.3278 8.08215C19.9833 8.17028 20.6117 8.36902 21.1213 8.87868C21.631 9.38835 21.8297 10.0167 21.9179 10.6722C22.0001 11.2839 22 12.0477 22 12.9342ZM11 14C11 12.3431 12.3432 11 14 11C15.6569 11 17 12.3431 17 14C17 15.6569 15.6569 17 14 17C12.3432 17 11 15.6569 11 14Z"
          fill="currentColor"
        ></path>{" "}
        <path
          d="M17.9965 7.00391C17.7103 6.99994 17.4161 6.99997 17.1189 7.00001L10.8813 7.00001C10.0376 6.99992 9.21767 6.99983 8.53906 7.09107C7.77331 7.19402 6.89841 7.44484 6.17167 8.17158C5.44493 8.89832 5.19411 9.77323 5.09116 10.539C4.99992 11.2176 5 12.0375 5.00009 12.8813V15.1187C5.00006 15.4118 5.00003 15.702 5.00383 15.9844C4.93907 15.9812 4.87645 15.9774 4.81603 15.9727C4.44281 15.9439 4.07084 15.8804 3.70949 15.7082C3.08831 15.4122 2.58777 14.9117 2.29177 14.2905C2.11957 13.9291 2.05608 13.5572 2.02728 13.184C1.99998 12.8301 1.99999 12.4011 2.00001 11.9039L2 8.93415C1.99995 8.04768 1.99991 7.28385 2.08215 6.67219C2.17028 6.01668 2.36902 5.38833 2.87869 4.87866C3.38835 4.369 4.0167 4.17026 4.67221 4.08213C5.28387 3.99989 6.04769 3.99993 6.93418 3.99998L14.539 3.99993C14.9608 3.99956 15.3242 3.99924 15.6475 4.07069C16.7872 4.32262 17.6774 5.21276 17.9293 6.35249C17.9736 6.55277 17.9903 6.76846 17.9965 7.00391Z"
          fill="currentColor"
        ></path>
      </>
    ),
    details: "Ksh.30,000",
  },
  {
    title: "Visitors",
    icon: (
      <>
        <path
          fillRule="evenodd"
          d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z"
          fill="currentColor"
        ></path>
      </>
    ),
    details: "10",
  },
];

const DashboardPage = () => {
  const [open, setOpen] = useState(false)
  const handleDialog = ()=>{
    setOpen(true)
  }
  return (
    <div className="my-5">
      <div>
        <p className="text-4xl font-bold blue-txt">Dashboard</p>
        <div className="flex w-full gap-3 flex-wrap justify-evenly lg:w-3xl lg:justify-between mt-8 mb-8">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex min-w-50 hover:scale-98 hover:cursor-pointer transition-all duration-200 ease-in-out border border-blue-300 rounded-xl p-3 flex-col"
            >
              <div className="flex text-blue-800 mb-1 items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {item.icon}
                </svg>
                <p className="text-md">{item.title}</p>
              </div>
              <p className="font-[600] text-3xl">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleDialog} className="flex items-center border hover:bg-transparent hover:cursor-pointer hover:text-blue-700 transition-all duration-300 ease-in-out bg-blue-700 py-2 px-3 rounded-3xl text-white">
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
            stroke="currentColor"
            strokeWidth={2}
          ></path>{" "}
        </svg>
        <p className="pr-5">Add data</p>
      </button>
      <div className="flex gap-3 items-start justify-between flex-wrap">
        <div className="mt-10 border p-5 border-blue-200 rounded">
          <p className="font-semibold mb-5 text-blue-900 ml-15 text-2xl">
            Church Attendance Summary
          </p>
          <AttendanceChart />
        </div>
        <div className="mt-10 border p-5 border-blue-200 rounded">
          <p className="font-semibold mb-5 text-blue-900 ml-15 text-2xl">
            Sunday Giving Summary
          </p>
          <OfferingsChart />
        </div>
      </div>
      <div className="mt-10 border p-5 border-blue-200 max-w-2xl">
        <p className="font-semibold mb-5 text-blue-900 ml-15 text-2xl">
          Attendance by age
        </p>
        <AttendancePieChart />
      </div>

      <Dialog open={open} as="div" onClose={()=>setOpen(false)}>
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
          <CollectDataForm/>
        </DialogPanel>
        </div>
        
      </Dialog>
    </div>
  );
};
export default DashboardPage;
