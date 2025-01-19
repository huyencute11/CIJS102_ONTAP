import React, { useState } from 'react'
import Header from '../Header/Header'
import ContentTask from '../ContentTask/ContentTask'
import { tasks } from '../../data/mockData'
import ModalAdd from '../ModalAdd/ModalAdd'

const Homepage = () => {
    const [listTask, setTasks] = useState(tasks)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        flagId: 1,
        assignedTo: 1,
        statusId: 1,
        title: "",
        deadline: "aaaaaaa",
        description: "",
    }
    );

    const handleResetForm = () => {
        setFormData({
            flagId: 1,
            assignedTo: 1,
            statusId: 1,
            title: "",
            deadline: "",
            description: "",
        });
    }

    const handleOk = () => {
        // Thêm công việc mới vào danh sách
        const newTask = {
            taskId: listTask.length + 1,
            ...formData
        }
        console.log("🚀 ~ handleOk ~ newTask:", newTask)
        setTasks([...listTask, newTask]);
        setIsModalOpen(false);
        handleResetForm();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header listTasks={listTask} setTasks={setTasks} openNewItemModal={() => setIsModalOpen(true)} />
            <ContentTask tasks={listTask} />
            <ModalAdd isModalOpen={isModalOpen} handleOk={handleOk}
                handleCancel={handleCancel} valueForm={formData}
                handleSetValueForm={setFormData} 
                />
        </>
    )
}

export default Homepage