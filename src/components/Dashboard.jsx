import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../CSS/DashBoard.css";
import {
  TbBasketCancel,
  TbBasketCheck,
  TbBasketDollar,
  TbBasketPlus,
} from "react-icons/tb";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { GoGoal } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { PiHamburgerFill } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import RecentOrdersTable from "./RecentOrdersTable";
const percentage = 70;
const activityData = [
  { name: "5", value: 4000 },
  { name: "9", value: 3000 },
  { name: "11", value: 2000 },
  { name: "13", value: 2780 },
  { name: "15", value: 1890 },
  { name: "17", value: 2390 },
  { name: "19", value: 3490 },
  { name: "21", value: 2000 },
  { name: "23", value: 2780 },
  { name: "25", value: 1890 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div className="grid-container">
        <div className="cards-container">
          <div className="grid-item card">
            <div className="card-Icon">
              <TbBasketPlus size={24} color="#3e62f0" />
            </div>

            <h3>Total Orders</h3>
            <p>75</p>
            <span className="percentage up">
              <TiArrowSortedUp color="green" /> 3%
            </span>
          </div>

          <div className="grid-item card">
            <div className="card-Icon-green">
              <TbBasketCheck size={24} color="#00ca8c" />
            </div>

            <h3>Total Delivered</h3>
            <p>70</p>
            <span className="percentage down">
              <TiArrowSortedDown color="red" /> 3%
            </span>
          </div>

          <div className="grid-item card">
            <div className="card-Icon-red">
              <TbBasketCancel size={24} color="#f45c5b" />
            </div>

            <h3>Total Cancelled</h3>
            <p>05</p>
            <span className="percentage up">
              <TiArrowSortedUp color="green" /> 3%
            </span>
          </div>

          <div className="grid-item card">
            <div className="card-Icon-pink">
              <TbBasketDollar size={24} color="#e2449d" />
            </div>

            <h3>Total Revenue</h3>
            <p>$12k</p>
            <span className="percentage down">
              <TiArrowSortedDown color="red" /> 3%
            </span>
          </div>
        </div>
        <div className="net-profit">
          <div>
            <h4>Net Profit</h4>
            <h2>$6759.25</h2>
            <span className="percentage-net up">
              {" "}
              <TiArrowSortedUp color="green" /> 3%
            </span>
          </div>
          <div style={{ width: "100px", margin: "0 auto" }}>
            <CircularProgressbar
              value={60}
              text={`${percentage}%`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                textColor: "#3e98c7",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
      </div>
      <div className="activity-container">
        <div className="bar-chart-container">
          <h3>Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* 1 */}
        <div className="goals-container">
          <div className="sub-goals-container">
            <div className="block-icons">
              <div className="goals-icon-container">
                <GoGoal size={34} color="#e46928" />
              </div>
              <p>Goals</p>
            </div>
            <IoIosArrowDropright size={28} />
          </div>
          {/* 2 */}
          <div className="sub-goals-container">
            <div className="block-icons">
              <div className="goals-icon-container-dishes">
                <PiHamburgerFill size={34} color="#6b7cd7" />
              </div>
              <p>Popular Dishes</p>
            </div>
            <IoIosArrowDropright size={28} />
          </div>
          {/* 3 */}
          <div className="sub-goals-container">
            <div className="block-icons">
              <div className="goals-icon-container-menus">
                <BiDish size={34} color="#328fb5" />
              </div>
              <p>Menus</p>
            </div>
            <IoIosArrowDropright size={28} />
          </div>
        </div>
      </div>

      {/* recent orders  */}
      <div className="grid-item-recent-orders">
        <div className="table-container">
          {/* <h3>Recent Orders</h3>
          <ul>
            <li>
              Wade Warren - $124.00 -{" "}
              <span className="status completed">Completed</span>
            </li>
            <li>
              Jane Cooper - $365.02 -{" "}
              <span className="status completed">Completed</span>
            </li>
            <li>
              Guy Hawkins - $45.86 -{" "}
              <span className="status cancelled">Cancelled</span>
            </li>
            <li>
              Kristin Watson - $85.00 -{" "}
              <span className="status pending">Pending</span>
            </li>
            <li>
              Cody Fisher - $545.00 -{" "}
              <span className="status completed">Completed</span>
            </li>
            <li>
              Savannah Nguyen - $128.20 -{" "}
              <span className="status completed">Completed</span>
            </li>
          </ul> */}
          <RecentOrdersTable />
        </div>
        <div className="feedBack-container">
          <h3>Customer's Feedback</h3>
          <ul>
            <li>
              <div className="name-div">
                <p>Jenny Wilson</p>
                <p>★★★★★</p>
              </div>
              <p className="content">
                The food was excellent and so was the service...
              </p>
              <hr />
            </li>
            <li>
              <div className="name-div">
                <p>Dianne Russell</p>
                <p>★★★★★</p>
              </div>
              <p className="content">
                We enjoyed the Eggs Benedict served on homemade...
              </p>
              <hr />
            </li>
            <li>
              <div className="name-div">
                <p>Dianne Russell</p>
                <p>★★★★★</p>
              </div>
              <p className="content">
                We enjoyed the Eggs Benedict served on homemade...
              </p>
              <hr />
            </li>
            <li>
              <div className="name-div">
                <p>Devon Lane</p>
                <p>★★★★★</p>
              </div>
              <p className="content">
                Normally wings are wings, but theirs are lean...
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="grid-item feedback"></div> */}
    </div>
  );
};

export default Dashboard;
