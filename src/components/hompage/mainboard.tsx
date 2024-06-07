import {FC} from "react";
import Margin from "../margin.tsx";
import {Button, Flex, Tag} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";

const HomepageMainboard: FC = () => {
    return <Margin>
        <div className={'pb-28 pt-32 flex justify-between'}>
            <div style={{width:'610px'}}>
                <Button shape="round" className={'mb-8'}>Learn what’s new!<ArrowRightOutlined/></Button>


                <h1 className={'text-4xl mb-5'} style={{lineHeight: '1.5', fontWeight: 'normal'}}>
                    <span className="">Expo and EAS are</span><br/>an ecosystem of
                    tools that help you <br/>

                    <span
                        className="inline-block pb-2 px-2 rounded-md bg-blue-100 text-blue-500 text-4xl mr-2">
              mock
          </span>

                    <span
                        className="inline-block pb-2 px-2 rounded-md bg-orange-100 text-orange-500 text-4xl mr-2">
              compare
          </span>
                    <span className={'mr-2'}>&</span>
                    <span
                        className="inline-block pb-2 px-2 rounded-md bg-green-100 text-green-700 text-4xl mr-2">
              agent
          </span>
                </h1>

                <p className={'text-[#687076] mb-10'} style={{fontSize: '18px'}}>AREX is a tool that automates regression
                    testing by recording real traffic from<br/> the online environment to the test environment, solving the
                    problem of regression testing.</p>

                <div className={'gap-2 flex'}>
                    <Button size={'large'} type={'primary'}>Sign Up for Free<ArrowRightOutlined/></Button>
                    <Button size={'large'}>Read the Docs<ArrowRightOutlined
                        className={'text-border'}/></Button>
                </div>
            </div>


            <div style={{width:'600px'}} className={'bg-pink-300'}>
            </div>
        </div>
    </Margin>
}
export default HomepageMainboard;