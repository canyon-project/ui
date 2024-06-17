import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { FC, ReactNode } from "react";

import Margin from "../margin.tsx";
interface HomepageMainBoardProps {
	onClickLearnWhatNew?: () => void;
	onClickSignUp?: () => void;
	onClickReadDocs?: () => void;
	copywriter: {
		firstLine: string;
		secondLine: string;
		threeCores: string[];
		introduction: string;
	};
	banner: ReactNode;
}
const HomepageMainBoard: FC<HomepageMainBoardProps> = ({
	onClickLearnWhatNew,
	onClickSignUp,
	onClickReadDocs,
	copywriter,
	banner,
}) => {
	return (
		<Margin>
			<div className={"pb-20 pt-32 flex justify-between"}>
				<div style={{ width: "610px" }}>
					<Button
						shape="round"
						className={"mb-8"}
						onClick={onClickLearnWhatNew}
					>
						Learn what’s new!
						<ArrowRightOutlined />
					</Button>

					<h1
						className={"text-4xl mb-5"}
						style={{ lineHeight: "1.5", fontWeight: "normal" }}
					>
						<span className="">{copywriter.firstLine}</span>
						<br />
						{copywriter.secondLine}
						<br />
						<span className="inline-block pb-2 px-2 rounded-md bg-blue-100 text-blue-500 text-4xl mr-2">
							{copywriter.threeCores[0]}
						</span>
						<span className="inline-block pb-2 px-2 rounded-md bg-orange-100 text-orange-500 text-4xl mr-2">
							{copywriter.threeCores[1]}
						</span>
						<span className={"mr-2"}>&</span>
						<span className="inline-block pb-2 px-2 rounded-md bg-green-100 text-green-700 text-4xl mr-2">
							{copywriter.threeCores[2]}
						</span>
					</h1>

					<p
						className={"text-[#687076] mb-10"}
						style={{ fontSize: "18px", lineHeight: "1.5" }}
					>
						{copywriter.introduction}
					</p>

					<div className={"gap-2 flex"}>
						<Button size={"large"} type={"primary"} onClick={onClickSignUp}>
							Sign Up for Free
							<ArrowRightOutlined />
						</Button>
						<Button size={"large"} onClick={onClickReadDocs}>
							Read the Docs
							<ArrowRightOutlined className={"text-border"} />
						</Button>
					</div>
				</div>

				<div
					style={{ width: "600px", height: "500px" }}
					className={"relative flex justify-center items-center"}
				>
					{banner}
				</div>
			</div>
		</Margin>
	);
};
export default HomepageMainBoard;
