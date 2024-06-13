import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';

import Margin from '../margin.tsx';

const HomepageMainboard: FC = () => {
  return (
    <Margin>
      <div className={'pb-28 pt-32 flex justify-between'}>
        <div style={{ width: '610px' }}>
          <Button shape='round' className={'mb-8'}>
            Learn what’s new!
            <ArrowRightOutlined />
          </Button>

          <h1 className={'text-4xl mb-5'} style={{ lineHeight: '1.5', fontWeight: 'normal' }}>
            <span className=''>AREX is</span>
            <br />
            a testing platform with real data
            <br />
            <span className='inline-block pb-2 px-2 rounded-md bg-blue-100 text-blue-500 text-4xl mr-2'>
              mock
            </span>
            <span className='inline-block pb-2 px-2 rounded-md bg-orange-100 text-orange-500 text-4xl mr-2'>
              compare
            </span>
            <span className={'mr-2'}>&</span>
            <span className='inline-block pb-2 px-2 rounded-md bg-green-100 text-green-700 text-4xl mr-2'>
              agent
            </span>
          </h1>

          <p className={'text-[#687076] mb-10'} style={{ fontSize: '18px', lineHeight: '1.5' }}>
            AREX solves regression testing challenges by replicating real online traffic to the test
            environment for automated regression testing. Iterate with confidence.
          </p>

          <div className={'gap-2 flex'}>
            <Button size={'large'} type={'primary'}>
              Sign Up for Free
              <ArrowRightOutlined />
            </Button>
            <Button size={'large'}>
              Read the Docs
              <ArrowRightOutlined className={'text-border'} />
            </Button>
          </div>
        </div>

        <div style={{ width: '600px',height:'500px' }} className={'relative flex justify-center items-center'}>
          <img src='/img/bg11.png' className={'w-[450px]'} alt='' />
          <img
            src='/img/img_2.png'
            className={'w-[320px] top-[21px] right-[-67px] absolute'}
            alt=''
          />
          <img
            src='/img/img_1.png'
            className={'w-[350px] bottom-[6px] left-[-60px] absolute'}
            alt=''
          />
        </div>
      </div>
    </Margin>
  );
};
export default HomepageMainboard;
