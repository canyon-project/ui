import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Drawer, Form, Input, Popconfirm, Table } from 'antd';
import { FC, useState } from 'react';

/**
 * noop is a helper function that does nothing
 * @returns undefined
 */
function noop() {
  /** no-op */
}

// 注意多默认值
// noob函数

interface CrudTableProps {
  dataSource: any[];
  loading: boolean;
  columns: any[];
  formItems: any;
  onCreate?: (values: any) => void;
  onDelete?: (values: any) => void;
  onUpdate?: (values: any) => void;
}

const CrudTable: FC<CrudTableProps> = ({
  dataSource,
  loading,
  columns,
  formItems,
  /* === */
  onCreate = noop,
  onDelete = noop,
  onUpdate = noop,
}) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  function onFinish(values) {
    if (values.mode === 'create') {
      onCreate(values);
    } else {
      onUpdate(values);
    }
    setVisible(false);
  }
  function closeDrawer() {
    setVisible(false);
  }

  function add() {
    setVisible(true);
    form.setFieldsValue({
      mode: 'create',
      emails: [],
    });
  }

  function edit(record) {
    setVisible(true);
    form.setFieldsValue({
      ...record,
      mode: 'update',
    });
  }

  return (
    <div className={''}>
      <Button onClick={add}>
        <PlusOutlined />
        Add
      </Button>
      <div className={'h-2'}></div>
      <Table
        rowKey={'id'}
        dataSource={dataSource}
        columns={columns.concat({
          title: 'Operation',
          render: (text, record) => {
            return (
              <div>
                <Button
                  onClick={() => {
                    edit(record);
                  }}
                >
                  编辑
                </Button>

                <Divider type={'vertical'} />

                <Popconfirm
                  title='Delete the project'
                  description='Are you sure to delete this project?'
                  onConfirm={() => {
                    onDelete(record);
                  }}
                  onCancel={() => {
                    console.log('cancel');
                  }}
                  okText='Yes'
                  cancelText='No'
                >
                  <Button loading={false} danger>
                    {'Delete'}
                  </Button>
                </Popconfirm>
              </div>
            );
          },
        })}
        loading={loading}
      />
      <Drawer title={`User`} open={visible} width={'45%'} onClose={closeDrawer}>
        <Form form={form} onFinish={onFinish} layout={'vertical'}>
          <Form.Item label='mode' name={'mode'}>
            <Input />
          </Form.Item>
          {formItems}
        </Form>
      </Drawer>
    </div>
  );
};

export default CrudTable;
