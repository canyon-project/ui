import { CodepenOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { FC } from 'react';

import Margin from '../margin.tsx';
const { Text } = Typography;
const Ig = ({ url }: any) => {
  return (
    <div className={'w-[480px] relative'}>
      <em
        className='absolute z-10 left-[-89.5px] w-[20px] h-[20px] bg-white rounded-full'
        style={{ border: '2px solid #96c7f2' }}
      ></em>
      <h3 className='text-default text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] mb-1'>
        File-based routing, TypeScript ready
      </h3>
      <Text
        type={'secondary'}
        className='font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary mb-6'
      >
        Create stack and modal screens with minimal boilerplate using your filesystem. Feel
        confident with TypeScript.
      </Text>
      <div className='pt-3'>
        <img src={url} alt='File-based routing' className={'w-[480px]'} />
      </div>
    </div>
  );
};
const Workflows: FC = () => {
  return (
    <Margin>
      <div className={'pt-20'}></div>
      <div className={'relative'}>
        <div className={'flex items-center justify-center z-10 relative'}>
          <div
            className={
              'bg-[#edf6ff] rounded-[150px] w-[220px] h-[220px] flex justify-center items-center'
            }
          >
            <div
              className={
                'bg-[#e1f0ff] rounded-[150px] w-[168px] h-[168px] flex flex-col items-center justify-center'
              }
            >
              <CodepenOutlined style={{ fontSize: 30 }} className={'text-[#0081f1]'} />
              <span className={'text-[#0081f1] text-[25px] font-semibold'}>Develop</span>
            </div>
          </div>
        </div>

        <div className={'bg-blue-300 w-[1px] h-[100%] absolute left-1/2 top-0'}></div>

        <div className='relative grid grid-cols-2 gap-x-40 max-lg-gutters:mt-8 max-lg-gutters:grid-cols-auto-min-1 max-lg-gutters:gap-y-16 max-lg-gutters:pl-10'>
          <div className={'relative top-[100px]'}>
            <Ig url={'/img/workflows/img_2.png'}></Ig>
          </div>
          <div className={'relative top-[50px]'}>
            <Ig url={'/img/workflows/img_1.png'}></Ig>
          </div>
          <div className={'relative top-[170px]'}>
            <Ig url={'/img/workflows/img_1.png'}></Ig>
          </div>
        </div>
      </div>
      <div className={'h-[200px]'}></div>
    </Margin>
  );
};

export default Workflows;
