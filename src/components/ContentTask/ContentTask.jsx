import React, { useState } from 'react'
import ColumnTask from '../ColumnTask/ColumnTask'
import { taskStatus } from '../../data/mockData'
import ModalEdit from '../ModalAdd/ModalEdit'

const ContentTask = ({ tasks }) => {

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                // alignItems: 'center',
                gap: '10px'
            }}>
                {taskStatus.map((status) => (
                    <ColumnTask key={status.statusId} status={status} listTask={tasks.filter((task) =>
                        task.statusId === status.statusId
                    )} />
                ))}
            </div>
           
        </>

    )
}

export default ContentTask