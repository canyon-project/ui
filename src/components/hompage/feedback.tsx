import { ArrowRightOutlined, IssuesCloseOutlined } from "@ant-design/icons";

const Feedback = () => {
	return (
		<div className={"w-[1000px] m-auto py-24"}>
			<div className={"flex gap-6"}>
				{[1, 2, 3, 4].map((_, index) => {
					return (
						<div
							style={{ border: "1px solid #dfe3e6" }}
							className={"w-full rounded shadow"}
							key={String(index)}
						>
							<div className={"h-[120px] flex items-center justify-center"}>
								<IssuesCloseOutlined style={{ fontSize: 36 }} />
							</div>

							<div
								className={"py-2 px-5 bg-[#f8f9fa] flex justify-between"}
								style={{
									borderTop: "1px solid #eee",
									fontSize: 16,
									color: "#687076",
								}}
							>
								Read the docs
								<ArrowRightOutlined />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Feedback;
