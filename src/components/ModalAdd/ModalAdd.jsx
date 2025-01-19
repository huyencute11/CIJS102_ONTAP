import React from 'react'
import { Modal, Input, Select, Button, Form, Row, Col } from 'antd';
import { BiFlag, BiSolidFlag } from 'react-icons/bi';
import { DatePicker } from 'antd';
import { users, taskStatus } from '../../data/mockData'

const ModalAdd = ({ isModalOpen, handleOk, handleCancel, valueForm, handleSetValueForm }) => {
    const optionUsers = users.map((user) => ({
        value: user.userId,
        label: user.name
    }))

    const optionStatus = taskStatus.map((status) => ({ 'value': status.statusId, 'label': status.name }))
    return (
        <Modal title={
            <span>
                <BiSolidFlag color='green' />
            </span>
        }
            footer={
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '10px'
                }}>
                    <Button key="back" onClick={handleCancel}
                        style={{
                            width: '50%'
                        }}
                    >
                        Cancel
                    </Button>
                    <Button key="submit" type="primary" onClick={handleOk}
                        style={{
                            width: '50%'
                        }}>
                        Save
                    </Button>
                </div>
            }
            open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={'50%'}>
            <h3>Save task</h3>
            <Form
                style={{
                    maxWidth: '800px'
                }}
                layout='vertical'
            >
                <Form.Item>
                    <Row gutter={20}>
                        <Col span={14}>
                            <Form.Item
                                label="Title"
                                name="title"

                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your title!',
                                    },
                                ]}
                            >
                                <Input value={valueForm.title} onChange={
                                    (e) => handleSetValueForm({ ...valueForm, title: e.target.value })
                                } />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                                label="Due date"
                                name="deadline"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your due date!',
                                    },
                                ]}
                            >

                                <DatePicker
                                    value={valueForm.deadline}
                                    format="YYYY-MM-DD"
                                    onChange={(date) => handleSetValueForm({
                                        ...valueForm, deadline: new Date(date.format('YYYY-MM-DD'))
                                    })}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item>
                    <Row gutter={20}>
                        <Col span={14}>
                            <Form.Item
                                label="Description"
                                name="description"

                            >
                                <Input.TextArea rows={5} value={valueForm.description}
                                    onChange={
                                        (e) => handleSetValueForm({ ...valueForm, description: e.target.value })
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                                label="Assignee"
                                name="assignee"
                            >
                                <Select
                                    defaultValue={
                                        valueForm.assignedTo
                                    }
                                    style={{
                                        width: 240,
                                    }}
                                    onChange={
                                        (value) => handleSetValueForm({ ...valueForm, assignedTo: value })
                                    }
                                    options={optionUsers}

                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    label='Status'
                    name='status'
                >
                    <Col span={10}>
                        <Select
                            defaultValue={valueForm.statusId}
                            options={optionStatus}
                            onChange={
                                (value) => handleSetValueForm({ ...valueForm, statusId: value })
                            }
                        >
                        </Select>
                    </Col>

                </Form.Item>

            </Form>
        </Modal>
    )
}

export default ModalAdd