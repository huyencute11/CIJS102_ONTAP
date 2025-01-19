import React from 'react'
import { BiPlus, BiDotsHorizontal } from 'react-icons/bi'
import Card from '../Card/Card'
import { tasks } from '../../data/mockData'

const ColumnTask = ({ status, listTask }) => {

    return (
        <div
            style={{
                borderRadius: '5px',
                padding: '10px',
                margin: '10px',
                backgroundColor: '#e6ecf0',
                // height: '500px',
                width: '25%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                // justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                display: 'flex',
            }}>
                <span>{status.name}</span>
                <span style={{
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                    height: '20px',
                    width: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    marginLeft: '10px'
                }}>{listTask?.length}</span>
                <span style={{
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                    height: '20px',
                    width: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    marginLeft: '10px'
                }}><BiPlus />

                </span>
                <span style={{
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                    height: '20px',
                    width: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    marginLeft: '10px'
                }}><BiDotsHorizontal />

                </span>

            </div>
            <div>
                {listTask.map((task) => (
                    <Card key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}

export default ColumnTask