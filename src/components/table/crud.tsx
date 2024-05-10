import { PlusOutlined } from '@ant-design/icons';
// import { useRequest } from 'ahooks';
import {Button, Drawer, Form, message, Popconfirm, Select, Table, Tooltip} from 'antd';
import {useState} from "react";

// import request from '../../../helpers/request.ts';



const Members = ({
    dataSource,
    loading,
    onCreate,
    onDelete,
    onUpdate,
                     columns,
                     formItems
                 }) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    function onFinish(values) {
        if (values.mode === -1){
            onCreate(values);
        } else {
            onUpdate(values);
        }
    }
    function showDrawer() {
        setVisible(true);
        form.setFieldsValue({
            emails: [],
        });
    }
    function closeDrawer() {
        setVisible(false);
    }

    return (
        <div className={''}>
            <Button type={'primary'} onClick={showDrawer}>
                <PlusOutlined />
                Add
            </Button>
            <div className={'h-2'}></div>
            <Table dataSource={dataSource} columns={columns.concat(        {
                title: 'Operation',
                render: (text, record) => {
                    return (
                        <Popconfirm
                            title="Delete the project"
                            description="Are you sure to delete this project?"
                            onConfirm={() => {
                                onDelete(record.id);
                            }}
                            onCancel={() => {
                                console.log('cancel');
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button loading={false} danger>
                                {'Delete'}
                            </Button>
                        </Popconfirm>
                    );
                },
            },)} loading={loading}  />
            <Drawer
                title="Add User"
                open={visible}
                width={'45%'}
                onClose={closeDrawer}
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout={'vertical'}
                >
                    {formItems}
                </Form>
            </Drawer>
        </div>
    );
};

export default Members;
