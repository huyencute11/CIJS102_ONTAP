import React from 'react';
import { Modal, Input, Select, Button, Form, Row, Col, DatePicker } from 'antd';
import { BiSolidFlag } from 'react-icons/bi';
import dayjs from 'dayjs';
import { users, taskStatus } from '../../data/mockData';

const ModalEdit = ({ isModalOpen, handleOk, handleCancel, valueForm, handleSetValueForm }) => {
    const optionUsers = users.map((user) => ({
        value: user.userId,
        label: user.name,
    }));

    const optionStatus = taskStatus.map((status) => ({
        value: status.statusId,
        label: status.name,
    }));

    return (
        <Modal
            title={
                <span>
                    <BiSolidFlag color="green" />
                </span>
            }
            footer={
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <Button
                        key="back"
                        onClick={handleCancel}
                        style={{ width: '50%' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        key="submit"
                        type="primary"
                        onClick={handleOk}
                        style={{ width: '50%' }}
                    >
                        Save
                    </Button>
                </div>
            }
            open={isModalOpen}
            onCancel={handleCancel}
            width="50%"
        >
            <h3>Edit Task</h3>
            <Form
                style={{ maxWidth: '800px' }}
                layout="vertical"
            >
                <Row gutter={20}>
                    <Col span={14}>
                        <Form.Item
                            label="Title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your title!',
                                },
                            ]}
                        >
                            <Input
                                value={valueForm.title}
                                onChange={(e) =>
                                    handleSetValueForm({
                                        ...valueForm,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item
                            label="Due date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your due date!',
                                },
                            ]}
                        >
                            <DatePicker
                                value={valueForm.deadline ? dayjs(valueForm.deadline) : null}
                                format="YYYY-MM-DD"
                                onChange={(date) =>
                                    handleSetValueForm({
                                        ...valueForm,
                                        deadline: date ? date.toISOString() : null,
                                    })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={14}>
                        <Form.Item label="Description">
                            <Input.TextArea
                                rows={5}
                                value={valueForm.description}
                                onChange={(e) =>
                                    handleSetValueForm({
                                        ...valueForm,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item label="Assignee">
                            <Select
                                value={valueForm.assignedTo}
                                style={{ width: 240 }}
                                onChange={(value) =>
                                    handleSetValueForm({
                                        ...valueForm,
                                        assignedTo: value,
                                    })
                                }
                                options={optionUsers}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Status">
                    <Col span={10}>
                        <Select
                            value={valueForm.statusId}
                            onChange={(value) =>
                                handleSetValueForm({
                                    ...valueForm,
                                    statusId: value,
                                })
                            }
                            options={optionStatus}
                        />
                    </Col>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalEdit;
