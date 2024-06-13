import { ExperimentOutlined } from "@ant-design/icons";

import RegionForm from "./components/form/region.tsx";
import Companies from "./components/hompage/companies.tsx";
import Feedback from "./components/hompage/feedback.tsx";
import Learn from "./components/hompage/learn.tsx";
import HomepageMainboard from "./components/hompage/mainboard.tsx";
import Pinglun from "./components/hompage/pinglun.tsx";
import Workflows from "./components/hompage/workflows.tsx";

function App() {
	const companiesDataSource = [
		{
			zIndex: 0,
			image: (
				<img src="/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 0,
			image: (
				<img src="/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 0,
			image: (
				<img src="/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 1,
			image: (
				<img src="/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 1,
			image: (
				<img src="/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
		{
			zIndex: 1,
			image: (
				<img src="/img/companies/trip.svg" alt="" className={"h-[50px]"} />
			),
		},
	];
	return (
		<>
			<div className={"p-20"}>
				<RegionForm
					title={"Coverage"}
					icon={<ExperimentOutlined />}
					onAdd={() => {
						console.log("???");
					}}
				>
					neirong
				</RegionForm>
			</div>
			<HomepageMainboard />
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
