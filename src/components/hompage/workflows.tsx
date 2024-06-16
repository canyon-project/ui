import { CodepenOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import type { FC, ReactNode } from "react";

import Margin from "../margin.tsx";
const { Text } = Typography;
const Ig: FC<{ url: string; index: number; bgc: string }> = ({
	url,
	index,
	bgc,
}) => {
	return (
		<div className={"w-[480px] relative"}>
			<em
				className="absolute z-10 left-[-89.5px] w-[20px] h-[20px] bg-white rounded-full"
				style={{
					border: `2px solid ${bgc}`,
					left: `${index % 2 === 1 ? "-89.5" : "615"}px`,
				}}
			/>
			<h3 className="text-default text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] mb-1">
				Get Started with AREX Agent
			</h3>
			<Text
				type={"secondary"}
				className="font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary mb-6"
			>
				No code intrusion, minimal integration cost.
			</Text>
			<div className="pt-3">
				<img src={url} alt="File-based routing" className={"w-[480px]"} />
			</div>
		</div>
	);
};
const bgcList = [
	{
		lv0: "#f5faff",
		lv1: "#edf6ff",
		lv2: "#96c7f2",
		lv3: "#0081f1",
	},
	{
		lv0: "#fef8f4",
		lv1: "#fff1e7",
		lv2: "#ffb381",
		lv3: "#ed5f00",
	},
	{
		lv0: "#f2fcf5",
		lv1: "#e9f9ee",
		lv2: "#92ceac",
		lv3: "#299764",
	},
];
const Workflows: FC<{
	dataSource: {
		title: string;
		children: {
			title: string;
			desc: string;
			img: ReactNode;
		}[];
	}[];
}> = ({ dataSource }) => {
	return (
		<Margin>
			<div className={"pt-20"} />
			{dataSource.map(({ title }, index) => {
				return (
					<div className={"relative"} key={String(index)}>
						<div className={"flex items-center justify-center z-10 relative"}>
							<div
								className={
									" rounded-[150px] w-[220px] h-[220px] flex justify-center items-center"
								}
								style={{
									backgroundColor: bgcList[index].lv0,
								}}
							>
								<div
									className={
										" rounded-[150px] w-[168px] h-[168px] flex flex-col items-center justify-center"
									}
									style={{
										backgroundColor: bgcList[index].lv1,
									}}
								>
									<CodepenOutlined
										style={{ fontSize: 30, color: bgcList[index].lv3 }}
									/>
									<span
										className={"text-[25px] font-semibold"}
										style={{
											color: bgcList[index].lv3,
										}}
									>
										{title}
									</span>
								</div>
							</div>
						</div>

						<div
							style={{
								backgroundColor: bgcList[index].lv2,
							}}
							className={" w-[1px] h-[100%] absolute left-1/2 top-0"}
						/>

						<div className="relative grid grid-cols-2 gap-x-40 max-lg-gutters:mt-8 max-lg-gutters:grid-cols-auto-min-1 max-lg-gutters:gap-y-16 max-lg-gutters:pl-10">
							<div className={"relative1 top-[50px] pt-[50px]"}>
								<Ig
									url={"/ui/img/workflows/img.png"}
									index={0}
									bgc={bgcList[index].lv2}
								/>
							</div>
							<div className={"relative1 top-[150px] pt-[150px]"}>
								<Ig
									url={"/ui/img/workflows/img_1.png"}
									index={1}
									bgc={bgcList[index].lv2}
								/>
							</div>
							<div className={"relative1 top-[250px]"}>
								<Ig
									url={"/ui/img/workflows/img_2.png"}
									index={2}
									bgc={bgcList[index].lv2}
								/>
							</div>
						</div>
					</div>
				);
			})}
			{/*<div className={"h-[500px]"} />*/}
		</Margin>
	);
};

export default Workflows;
