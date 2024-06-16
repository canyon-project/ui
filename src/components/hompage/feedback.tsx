import { ArrowRightOutlined } from "@ant-design/icons";
import type { FC, ReactNode } from "react";

const Feedback: FC<{
	dataSource: {
		icon: ReactNode;
		link: string;
		text: string;
	}[];
}> = ({ dataSource }) => {
	return (
		<div className={"w-[1000px] m-auto py-24"}>
			<div className={"flex gap-6"}>
				{dataSource.map(({ icon, text, link }, index) => {
					return (
						<div
							style={{ border: "1px solid #dfe3e6" }}
							className={"w-full rounded shadow"}
							key={String(index)}
						>
							<div
								className={"h-[120px] flex items-center justify-center"}
								style={{ fontSize: "36px" }}
							>
								{icon}
							</div>

							<a
								className={"py-2 px-5 bg-[#f8f9fa] flex justify-between"}
								style={{
									borderTop: "1px solid #eee",
									fontSize: 16,
									color: "#687076",
								}}
								href={link}
								target={"_blank"}
								rel="noreferrer"
							>
								{text}
								<ArrowRightOutlined />
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Feedback;
