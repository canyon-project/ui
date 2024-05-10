import CrudTable from "../../components/table/crud.tsx";
import {Button, Form, Popconfirm, Select} from "antd";

const CrudPage = () => {
    const dataSources = [{
        email: 'zhang@tyrip.com'
    }];

    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    function onUpdate(v){
        console.log(v)
    }
    function onDelete(vid){
        console.log('delete',vid)
    }

    return <div>
        <CrudTable dataSource={dataSources} columns={columns} formItems={<>
            <Form.Item label="Email" name={'emails'}>
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Tags Mode"
                    // onChange={handleChange}
                    options={[]}
                />
            </Form.Item>

            <Form.Item label="">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </>} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
}

export default CrudPage