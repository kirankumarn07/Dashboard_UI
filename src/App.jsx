/** @format */

import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

function App() {
  const [data, setData] = useState([
    {
      invoiceid: "#NKL32",
      date: "18/10/2023",
      customer: "kiran",
      payableamount: "$100",
      paidamount: "$000",
      due: "00",
    },
    {
      invoiceid: "#KLN345",
      date: "17/09/2023",
      customer: "NAGA",
      payableamount: "$300",
      paidamount: "$25",
      due: "275",
    },
    {
      invoiceid: "#NLK322",
      date: "11/09/2023",
      customer: "kumar",
      payableamount: "$300",
      paidamount: "$100",
      due: "200",
    },
    {
      invoiceid: "#NLK322",
      date: "11/09/2023",
      customer: "Naga",
      payableamount: "$300",
      paidamount: "$221",
      due: "79",
    },
    {
      invoiceid: "#NLK322",
      date: "11/09/2023",
      customer: "cruise",
      payableamount: "$800",
      paidamount: "00",
      due: "800",
    },
    {
      invoiceid: "#NLK322",
      date: "10/08/2023",
      customer: "tom",
      payableamount: "$999",
      paidamount: "$999",
      due: "000",
    },
    {
      invoiceid: "#Nkk322",
      date: "22/09/2023",
      customer: "nakkala",
      payableamount: "$10202",
      paidamount: "$10202",
      due: "00",
    },
    {
      invoiceid: "#NSD099",
      date: "10/07/2023",
      customer: "kalki",
      payableamount: "$4300",
      paidamount: "$4000",
      due: "300",
    },
    {
      invoiceid: "#NKA029",
      date: "02/09/2023",
      customer: "NagaKiran",
      payableamount: "$2000",
      paidamount: "$2000",
      due: "00",
    },
  ]);

  return (
    <>
      <div className='container-fluid'>
        <div className='row content  '>
          <Sidebar />
          <Dashboard data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
