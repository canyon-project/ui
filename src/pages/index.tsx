import { ArrowRightOutlined, FolderOutlined, LogoutOutlined } from '@ant-design/icons';
import { Breadcrumb, Tooltip } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import { CanyonLayoutBase } from '../components';

const IndexPage = () => {
  const nav = useNavigate();
  return (
    <div>
      <CanyonLayoutBase
        breadcrumb={<Breadcrumb className={'py-3'} items={[]} />}
        itemsDropdown={[
          {
            label: (
              <div className={'text-red-500'}>
                <LogoutOutlined className={'mr-2'} />
                Logout
              </div>
            ),
            // icon: <ArrowRightOutlined />,
            onClick: () => {
              localStorage.clear();
              // nav('/login');
              window.location.href = '/login';
            },
          },
        ]}
        MeData={{
          me: {
            username: 'tzhangm123',
          },
        }}
        onClickGlobalSearch={() => {
          // window.canyonModalGlobalSearchRef.current.report();
        }}
        title={'Canyon'}
        logo={
          <div>
            <img src='/logo.svg' alt='' className={'w-[30px]'} />
          </div>
        }
        mainTitleRightNode={
          <div>
            <Tooltip
              title={
                <div>
                  {/*<span>{t('menus.docs')}</span>*/}
                  <ArrowRightOutlined />
                </div>
              }
            >
              <a
                // href={baseData?.SYSTEM_QUESTION_LINK}
                target={'_blank'}
                rel='noreferrer'
                className={'ml-2'}
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {/*<img src={book} />*/}
                booking
              </a>
            </Tooltip>
            {/*marker position*/}
          </div>
        }
        menuSelectedKey={'projects'}
        onSelectMenu={(selectInfo) => {
          console.log(selectInfo);
          // setMenuSelectedKey(selectInfo.key);
          nav(`/${selectInfo.key}`);
        }}
        menuItems={[
          {
            label: 'crud',
            key: 'crud',
            icon: <FolderOutlined />,
          },
          {
            label: 'report',
            key: 'report',
            icon: <FolderOutlined />,
          },
        ]}
        renderMainContent={<Outlet />}
        search={false}
        account={false}
      />
    </div>
  );
};

export default IndexPage;
