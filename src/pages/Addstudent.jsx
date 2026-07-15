import { useContext, useState, useEffect } from "react";
import { studentContext } from "../context/studentcontext";
import { useNavigate } from "react-router-dom";
import { addStudent, updateStudent } from "../services/studentservice";
import styles from "./AddStudent.module.css";
import { toast } from "react-toastify";

import {
    FaUserPlus,
    FaUserEdit,
    FaUser,
    FaCalendarAlt,
    FaBuilding,
    FaSave,
    FaArrowLeft
} from "react-icons/fa";

export const AddStudent = () => {
    const navigate = useNavigate();

    const { edit, setEdit, fetchStudents } = useContext(studentContext);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [dept, setDept] = useState("");

    useEffect(() => {
        if (edit) {
            setName(edit.name);
            setAge(edit.age);
            setDept(edit.dept);
        }
    }, [edit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            age.trim() === "" ||
            dept.trim() === ""
        ) {
            toast.error("All fields must be filled.");
            return;
        }

        if (edit) {
            const updatedStudent = {
                id: edit.id,
                name,
                age,
                dept,
            };

            await updateStudent(updatedStudent);
            await fetchStudents();

            setEdit(null);
            toast.success('student updated')
        } else {
            const newStudent = {
                id: crypto.randomUUID(),
                name,
                age,
                dept,
            };

            await addStudent(newStudent);
            await fetchStudents();
            toast.success('student added')
        }

        setName("");
        setAge("");
        setDept("");

        navigate("/students");
    };

    return (
        <div className={styles.container}>
            <form className={styles.card} onSubmit={handleSubmit}>

                <h1 className={styles.title}>
                    {edit ? <FaUserEdit /> : <FaUserPlus />}
                    {edit ? "Edit Student" : "Add Student"}
                </h1>

                <div className={styles.formGroup}>
                    <label>
                        <FaUser />
                        Student Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter student name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>
                        <FaCalendarAlt />
                        Age
                    </label>

                    <input
                        type="number"
                        placeholder="Enter student age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>
                        <FaBuilding />
                        Department
                    </label>

                    <input
                        type="text"
                        placeholder="Enter department"
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                    />
                </div>

                <div className={styles.actions}>
                    <button type="submit">
                        <FaSave />
                        {edit ? "Update Student" : "Add Student"}
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/students")}
                    >
                        <FaArrowLeft />
                        Back
                    </button>
                </div>

            </form>
        </div>
    );
};