import { useContext } from "react";
import { studentContext } from "../context/studentcontext";
import styles from "./Dashboard.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";

export const Dashboard = () => {

    const { students } = useContext(studentContext);

    const totalStudents = students.length;

    const totalDepartments = new Set(
        students.map(student => student.dept)
    ).size;

    const averageAge =
        students.length > 0
            ? (
                  students.reduce(
                      (sum, student) => sum + Number(student.age),
                      0
                  ) / students.length
              ).toFixed(1)
            : 0;

    const oldestAge =
        students.length > 0
            ? Math.max(
                  ...students.map(student => Number(student.age))
              )
            : 0;

    return (

        <div className={styles.dashboard}>

            <h1>📊 Dashboard</h1>

            <div className={styles.cards}>

                <div className={styles.card}>
                    <FaUserGraduate/>
                    <h3>Total Students</h3>
                    <p>{totalStudents}</p>
                </div>

                <div className={styles.card}>
                    <FaBuilding/>
                    <h3>Departments</h3>
                    <p>{totalDepartments}</p>
                </div>

                <div className={styles.card}>
                    <FaChartLine/>
                    <h3>Average Age</h3>
                    <p>{averageAge}</p>
                </div>

                <div className={styles.card}>
                    <FaCrown/>
                    <h3>Oldest Age</h3>
                    <p>{oldestAge}</p>
                </div>

            </div>

        </div>

    );
};