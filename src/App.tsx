import {
	CloudOutlined,
	GithubOutlined,
	MutedOutlined,
	ReadOutlined,
} from "@ant-design/icons";
import Companies from "./components/hompage/companies.tsx";
import Feedback from "./components/hompage/feedback.tsx";
import Learn from "./components/hompage/learn.tsx";
import HomepageMainBoard from "./components/hompage/mainboard.tsx";
import Pinglun from "./components/hompage/pinglun.tsx";
import Workflows from "./components/hompage/workflows.tsx";
const pinglunDataSource = [
	{
		authorName: "Deputy Director of Testing",
		authorNickname: "Lexin",
		avatar: "/ui/img/pinglun/lx.jpg",
		comment: `AREX has effectively increased the team's ratio of automated cases, enhanced the efficiency of business delivery, and shortened the delivery cycle.`,
	},
	{
		authorName: "Testing Technology Lead",
		authorNickname: "United Imaging Intelligence",
		avatar: "/ui/img/pinglun/lyyl.png",
		comment:
			"With AREX, we have implemented full automation testing by using real production traffic, significantly improving testing and release efficiency.",
	},
	{
		authorName: "Test Development Engineer",
		authorNickname: "a fintech company",
		avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
		comment: `Seeking platform integration in R&D, we found AREX's cost-effective open-source solution superior. Integrating its test pass rate into CI has significantly benefited our operations.`,
	},
];
const feedbackDataSource = [
	{
		icon: <ReadOutlined />,
		link: "https://docs.arextest.com/",
		text: "Read the docs",
	},
	{
		icon: <GithubOutlined />,
		link: "https://github.com/arextest",
		text: "Join the community",
	},
	{
		icon: <CloudOutlined />,
		link: "https://cloud.arextest.com/",
		text: "About Cloud AREX",
	},
	{
		icon: <MutedOutlined />,
		link: "https://docs.arextest.com/blog",
		text: "Read our blog",
	},
];
function App() {
	const companiesDataSource = [
		{
			zIndex: 0,
			image: (
				<img
					src="/ui/img/user-company/trip.png"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 0,
			image: (
				<img
					src="/ui/img/user-company/lexing.png"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 0,
			image: (
				<img
					src="/ui/img/user-company/xingyun.png"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 1,
			image: (
				<img
					src="/ui/img/user-company/lianying.png"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 1,
			image: (
				<img
					src="/ui/img/user-company/lingjian.png"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 1,
			image: (
				<img
					src="/ui/img/user-company/shunhuishou.png"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 2,
			image: (
				<img
					src="/ui/img/user-company/xiaoyudian.png"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 2,
			image: (
				<img
					src="/ui/img/user-company/yika.jpg"
					alt=""
					className={"h-[40px]"}
				/>
			),
		},
		{
			zIndex: 2,
			image: (
				<img
					src="/ui/img/user-company/yiliu.png"
					alt=""
					className={"h-[40px]"}
				/>
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
					firstLine: "AREX Lets You",
					secondLine: "Confident in Every Iteration.",
					threeCores: ["Capture", "Replay", "Analyze"],
					introduction:
						"AREX solves the challenges of automated testing by replicating real online traffic to the test environment for automated API testing.",
				}}
			/>
			<Companies
				dataSource={companiesDataSource}
				topRightButton={<div>1122</div>}
			/>
			<Learn
				copywriter={[
					"AREX captures request parameters, return results, and some snapshot data during execution, such as database access parameters and results, as well as parameters and results for accessing remote servers, using AOP. It then sends the snapshot data to the test machine (the machine where code changes occur) to complete a replay process. By comparing the stored data, the data from calling backend requests, and the return results with the data from actual online requests, differences are identified to detect issues within the tested system.",
				]}
			/>
			<Workflows
				dataSource={[
					{
						title: "Capture",
            children:[
              {
                title:'High Coverage Without Writing Tests',
                desc:`Simply integrate AREX Agent into your application
to automatically capture API calls as test cases.`,
                img:<img src="/ui/img/workflows/img_02.png" alt="" className={"w-[480px]"} />
              },
              {
                title:'Mock third party dependencies',
                desc:`Record dependencies like DBs, redis, third-party services
as mocks for more reliable, affordable testing.`,
                img:<img src="/ui/img/workflows/img_03.png" alt="" className={"w-[480px]"} />
              }
            ]
					},
					{
						title: "Replay",
            children:[
              {
                title:'Automate Testing with Mocks',
                desc:`Intercept and respond to third-party service calls with
pre-recorded data, ensuring a rapid and reliable testing
experience without the setup of test environment.`,
                img:<img src="/ui/img/workflows/img_11.png" alt="" className={"w-[480px]"} />
              },
              {
                title:'Data Security Assurance',
                desc:`Provides granular permission control and automatic
traffic desensitization to enhance your data security.`,
                img:<img src="/ui/img/workflows/img_12.png" alt="" className={"w-[480px]"} />
              }
            ]
					},
					{
						title: "Analyze",
            children:[
              {
                title:`Intelligent Test Reporting`,
                desc:`AREX will compare the API response to the previously captured
response and a report will be generated, identifying potential
code bugs through response discrepancies.`,
                img:<img src="/ui/img/workflows/img_21.png" alt="" className={"w-[480px]"} />
              },
              {
                title:`Accurate Noise Detection`,
                desc:`AREX identifies noisy fields in the responses accurately
like ( timestamps, random values) to ensure high quality tests.`,
                img:<img src="/ui/img/workflows/img_22.png" alt="" className={"w-[480px]"} />
              }
            ]
					},
				]}
			/>
			{/*<Workflows />*/}
			{/*<Workflows />*/}
			<Pinglun
				dataSource={pinglunDataSource}
				onClickSignUp={() => window.open("https://cloud.arextest.com/")}
			/>
			<Feedback dataSource={feedbackDataSource} />
			<footer className={"h-[500px]"} />
		</>
	);
}

export default App;
