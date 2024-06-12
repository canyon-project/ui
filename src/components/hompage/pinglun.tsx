import { Button } from 'antd';
import Marquee from 'react-fast-marquee';
const Pinglun = () => {
  return (
    <div className={'relative mb-[125px]'}>
      <Marquee pauseOnHover>
        <div
          className={'gap-8 py-2 z-10 relative flex h-[300px] mr-8'}
          style={
            {
              // border: '1px solid black',
            }
          }
        >
          {[0, 1, 2, 0, 1].map((i, index) => {
            return (
              <div className={'flex items-center justify-center'}>
                <div
                  className={'inline-block shadow border p-5 w-[360px] rounded bg-white '}
                  style={{
                    border: '1px solid #dfe3e6',
                  }}
                >
                  <div className={'flex gap-2 pb-2'}>
                    <img
                      className={'w-[24px]'}
                      src='https://api.dicebear.com/7.x/miniavs/svg?seed=1'
                      alt=''
                    />

                    <div>
                      <div>Trevor Hartman</div>
                      <div className={'text-gray-600'}>@jamonholmgren</div>
                    </div>
                  </div>
                  <div className={''} style={{ lineHeight: 1.5 }}>
                    Arkansas Western District Court uses expo web. I chose @expo because it was the
                    fastest way for a single developer to achieve our mandate—mobile/desktop/web.
                    {index % 2 === 0
                      ? 'fastest way for a single developer to achieve our mandate—mobile/desktop/web.fastest way for'
                      : ''}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>

      <div className={'bg-[#edf6ff] absolute top-[155px] overflow-hidden w-full h-[500px]'}>
        <img src='/img/signup-stripes.svg' className='h-[100vw] w-[140vw]' alt='pattern' />
      </div>
      <div className={'relative z-100 text-center'}>
        <h2 className='text-center pt-20' style={{ fontSize: '40px', fontWeight: 'bolder' }}>
          Upgrade your team’s workflow
          <br />
          and iterate with stability.
        </h2>
        <Button type={'primary'} className={'text-center'} size={'large'}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Pinglun;
