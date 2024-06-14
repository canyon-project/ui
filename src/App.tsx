import Companies from "./components/hompage/companies.tsx";
import Feedback from "./components/hompage/feedback.tsx";
import Learn from "./components/hompage/learn.tsx";
import HomepageMainBoard from "./components/hompage/mainboard.tsx";
import Pinglun from "./components/hompage/pinglun.tsx";
import Workflows from "./components/hompage/workflows.tsx";

function App() {
	const companiesDataSource = [
		{
			zIndex: 0,
			image: (
				<img src="/ui/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 0,
			image: (
				<img src="/ui/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 0,
			image: (
				<img src="/ui/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 1,
			image: (
				<img src="/ui/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 1,
			image: (
				<img src="/ui/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 1,
			image: (
				<img src="/ui/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
	];
	return (
		<>
			{/*<div className={"p-20"}>*/}
			{/*	<RegionForm*/}
			{/*		title={"Coverage"}*/}
			{/*		icon={<ExperimentOutlined />}*/}
			{/*		onAdd={() => {*/}
			{/*			console.log("???");*/}
			{/*		}}*/}
			{/*	>*/}
			{/*		neirong*/}
			{/*	</RegionForm>*/}
			{/*</div>*/}
			{/*<TextTypography*/}
			{/*	title={"hi"}*/}
			{/*	icon={<RightSquareFilled />}*/}
			{/*	right={"ssss"}*/}
			{/*/>*/}
			<HomepageMainBoard
				banner={
					<div>
						<img src="/ui/img/bg11.png" className={"w-[450px]"} alt="" />
						<img
							src="/ui/img/img_2.png"
							className={"w-[320px] top-[21px] right-[-67px] absolute"}
							alt=""
						/>
						<img
							src="/ui/img/img_1.png"
							className={"w-[350px] bottom-[6px] left-[-60px] absolute"}
							alt=""
						/>
					</div>
				}
				copywriter={{
					firstLine: "Welcome to the future of work",
					secondLine: "The most powerful automation platform for teams",
					threeCores: ["Automate", "Integrate", "Collaborate"],
					introduction:
						"The most powerful automation platform for teams. Automate your business processes, integrate your apps, and collaborate with your team like never before.",
				}}
			/>
			<Companies
				dataSource={companiesDataSource}
				topRightButton={<div>1122</div>}
			/>
			<Learn />
			<Workflows />
			<Pinglun />
			<Feedback />
			<footer className={"h-[500px]"} />
		</>
	);
}

export default App;
