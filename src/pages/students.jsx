import { studentContext } from "../context/studentcontext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../services/studentservice";
import styles from "./Students.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export const Students = () => {
    const navigate = useNavigate();

    const { students, setEdit, fetchStudents } = useContext(studentContext);

    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");

    if (students.length === 0) {
        return <h2>No Students Found</h2>;
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        await deleteStudent(id);
        await fetchStudents();
    };

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedStudents = [...filteredStudents];

    if (sortBy === "nameASC") {
        sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "nameDSC") {
        sortedStudents.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (sortBy === "ageASC") {
        sortedStudents.sort((a, b) => a.age - b.age);
    }

    if (sortBy === "ageDesc") {
        sortedStudents.sort((a, b) => b.age - a.age);
    }

    const handleEdit = (student) => {
        setEdit(student);
        navigate("/addstudent");
    };

    return (
        <div className={styles.students}>

            <div className={styles.toolbar}>
                <input
                    className={styles.search}
                    type="text"
                    placeholder="Search Student"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className={styles.sort}
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="nameASC">Name (A-Z)</option>
                    <option value="nameDSC">Name (Z-A)</option>
                    <option value="ageASC">Age (Low-High)</option>
                    <option value="ageDesc">Age (High-Low)</option>
                </select>

            </div>

            <div className={styles.studentContainer}>

                {sortedStudents.map((student) => (

                    <div
                        key={student.id}
                        className={styles.card}
                    >

                        <h2>
                            <FaUserGraduate/>
                            {student.name}
                        </h2>

                        <p><strong>Age:</strong> {student.age}</p>

                        <p><strong>Department:</strong> {student.department}</p>

                        <div className={styles.actions}>

                            <button
                                onClick={() =>
                                    navigate(`/studentdetails/${student.id}`)
                                }
                                className={styles.viewBtn}
                            >
                                <FaEye/>
                                View
                            </button>

                            <button
                                onClick={() => handleEdit(student)}
                                className={styles.editBtn}
                            >
                                <FaEdit/>
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(student.id)}
                                className={styles.deleteBtn}
                            >
                                <FaTrash/>
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};