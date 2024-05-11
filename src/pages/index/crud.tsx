import { useRequest } from 'ahooks';
import { Button, ColorPicker, Form, Input, Popconfirm, Select } from 'antd';
import { useEffect } from 'react';

import CrudTable from '../../components/table/crud.tsx';
import {
  addMemberMock,
  deleteMemberMock,
  getMemberMock,
  updateMemberMock,
} from '../../mocks/member.ts';
const CanyonColorPicker = ({ value, onChange }) => {
  return (
    <div>
      <ColorPicker
        showText
        disabledAlpha
        value={value}
        onChange={(color, hex) => {
          onChange(hex);
        }}
      />
    </div>
  );
};
const CrudPage = () => {
  // const {data} =

  const {
    data,
    loading,
    run: getrun,
  } = useRequest(() => getMemberMock(), {
    onSuccess: (result) => {
      console.log(result);
    },
  });

  const {
    data: adddata,
    loading: addloading,
    run: addrun,
  } = useRequest((member) => addMemberMock(member), {
    manual: true,
    onSuccess: (result) => {
      console.log(result);
      getrun();
    },
  });

  const {
    data: updatedata,
    loading: updateloading,
    run: updaterun,
  } = useRequest((member) => updateMemberMock(member), {
    manual: true,
    onSuccess: (result) => {
      console.log(result);
      getrun();
    },
  });

  const {
    data: deldata,
    loading: delloading,
    run: delrun,
  } = useRequest((member) => deleteMemberMock(member), {
    manual: true,
    onSuccess: (result) => {
      console.log(result);
      getrun();
    },
  });

  useEffect(() => {
    getMemberMock().then((res) => {
      console.log(res);
    });
  }, []);

  // const dataSources = [];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '链接',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: '颜色',
      dataIndex: 'color',
      key: 'color',
    },
  ];

  function onUpdate(v) {
    updaterun(v);
  }
  function onDelete({ id }) {
    delrun({ id: id });
  }
  function onCreate(v) {
    addrun({
      ...v,
      id: String(Math.random()),
    });
  }

  return (
    <div>
      <CrudTable
        loading={loading}
        dataSource={data || []}
        columns={columns}
        formItems={
          <>
            <Form.Item label='ID' name='id'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='名称' name='name'>
              <Input />
            </Form.Item>

            <Form.Item label='链接' name='link'>
              <Input placeholder={'请输入链接地址（可选）'} />
            </Form.Item>

            <Form.Item label='颜色' name='color'>
              <CanyonColorPicker />
            </Form.Item>

            <Form.Item label=''>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </>
        }
        onUpdate={onUpdate}
        onDelete={onDelete}
        onCreate={onCreate}
      />
    </div>
  );
};

export default CrudPage;
