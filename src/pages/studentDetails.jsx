import { useParams, useNavigate } from "react-router-dom";
import { studentContext } from "../context/studentcontext";
import { useContext } from "react";
import styles from "./StudentDetails.module.css";
import {
    FaUserCircle,
    FaIdCard,
    FaUser,
    FaCalendarAlt,
    FaBuilding,
    FaArrowLeft
} from "react-icons/fa";

export const StudentDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { students } = useContext(studentContext);

    if (students.length === 0) {
        return <h2>No Students Found</h2>;
    }

    const student = students.find((st) => st.id === id);

    if (!student) {
        return <h2>Student Not Found</h2>;
    }

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <h1 className={styles.title}>
                    <FaUserCircle />
                    Student Details
                </h1>
                <div className={styles.info}>
                    <span>
                        <FaIdCard/>
                        ID
                    </span>
                    <p>{student.id}</p>
                </div>

                <div className={styles.info}>
                    <span>
                        <FaUser/>
                        Name
                    </span>
                    <p>{student.name}</p>
                </div>

                <div className={styles.info}>
                    <span>
                        <FaCalendarAlt/>
                        Age
                    </span>
                    <p>{student.age}</p>
                </div>

                <div className={styles.info}>
                    <span>
                        <FaBuilding/>
                        Department
                    </span>
                    <p>{student.dept}</p>
                </div>

                <button
                    className={styles.backBtn}
                    onClick={() => navigate("/students")}
                >
                    <FaArrowLeft/>
                    ← Back to Students
                </button>

            </div>

        </div>

    );
};