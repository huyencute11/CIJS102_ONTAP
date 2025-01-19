
import React, { useState } from 'react'
import { BiSolidPen, BiFlag } from 'react-icons/bi'
import FileIcon from '../../assets/icons/icon1.svg'
import { flags } from '../../data/mockData'
import ModalEdit from '../ModalAdd/ModalEdit'

const Card = ({ task }) => {
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const [valueForm, setValueForm] = useState(task)
    const colorFlag = flags.find((flag) => flag.flagId === task.flagId).color

    const handleUpdate = () => {
        console.log('🚀 ~ handleUpdate ~ valueForm', valueForm)
        // Update task
       
        
        // Close modal
        setIsOpenModalEdit(false)
    }
    return (
        <>
            <div style={{
                width: '287px',
                // height: '192px',
                gap: '10px',
                backgroundColor: '#fff',
                marginBottom: '10px',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    algignItems: 'center',
                }}>
                    <span>{task.title}</span>
                    <span style={{
                        cursor: 'pointer',
                        color: 'gray'
                    }}
                        onClick={() => setIsOpenModalEdit(true)}
                    >
                        <BiSolidPen />
                    </span>
                </div>
                <div>
                    <p>{task.description}</p>
                </div>
                <div>
                    <span style={{
                        backgroundColor: 'blue',
                        padding: '5px',
                        borderRadius: '5px',
                        color: 'white',
                        fontSize: '12px'
                    }}>
                        MindX school
                    </span>

                </div>
                <hr />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                    <span>
                        <img src={FileIcon} alt="file icon" />
                    </span>
                    <span>
                        <BiFlag color={
                            colorFlag
                        } />
                    </span>
                    <span>Deadline: {task?.deadline?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
            </div>
            <ModalEdit
                isModalOpen={isOpenModalEdit}
                handleCancel={() => setIsOpenModalEdit(false)}
                handleOk={handleUpdate}
                valueForm={valueForm}
                handleSetValueForm={setValueForm}

            />
        </>
    )
}

export default Card