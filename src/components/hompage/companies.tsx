import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';
import React, { FC } from 'react';

import Margin from '../margin.tsx';

const contentStyle: React.CSSProperties = {
  height: '160px',
  lineHeight: '160px',
  textAlign: 'center',
};

const Companies: FC<{
  topRightButton: React.ReactNode;
  dataSource?: {
    image: React.ReactNode;
    zIndex: number;
  }[];
}> = ({ dataSource = [] }) => {
  return (
    <Margin>
      <div className={'flex justify-between mb-10'}>
        <span style={{ fontWeight: 500, fontSize: 16 }}>Trusted by top companies</span>
        <Button shape={'round'}>
          Read Their Stories
          <ArrowRightOutlined />
        </Button>
      </div>
      <Carousel autoplay autoplaySpeed={5000}>
        {[...new Set(dataSource.map(({ zIndex }) => zIndex))].map((item, index) => {
          return (
            <div key={index}>
              <div className={'flex justify-around'}>
                {dataSource
                  .filter((i) => i.zIndex === index)
                  .map((i, index2) => {
                    return (
                      <div key={index2}>
                        <div style={contentStyle}>{i.image}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </Carousel>
    </Margin>
  );
};

export default Companies;
