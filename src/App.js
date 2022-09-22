import Transaction from "./components/Transaction";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { useState, useEffect } from "react";
import dataContext from "./data/dataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Title = () => (
  <h1 style={{ color: "red", textAlign: "center", fontSize: "35px" }}>
    โปรแกรมบัญชี รายรับ-รายจ่าย
  </h1>
);

function App() {
  const initData = [{ id: 1, title: "ค่าเช่าบ้าน", amount: -10000 }];

  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2) );
  }, [items, reportIncome, reportExpense]);

  //reducer state
  // const [showReport,setShowReport] = useState(false)
  // const reducer = (state,action) => {
  //   switch(action.type) {
  //     case "SHOW" :
  //       return setShowReport(true)
  //     case "HIDE" :
  //       return setShowReport(false)
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)

  return (
    <dataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <Title />
        <BrowserRouter>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />} />  
              <Route path="/insert" element={<><FormComponent onAddItem={onAddNewItem} /><Transaction items={items} /></>}/>
              {/* <Route path="/insert" element={<Transaction items={items} />}/> */}
            </Routes>
          </div>
        </BrowserRouter>
        {/* <button onClick={() =>dispatch({type:"SHOW"})}>แสดง</button>
          <button onClick={() =>dispatch({type:"HIDE"})}>ซ่อน</button> */}
      </div>
    </dataContext.Provider>
  );
}

export default App;
