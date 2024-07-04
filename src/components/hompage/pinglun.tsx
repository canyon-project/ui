import { Button } from "antd";
import type { FC } from "react";
import Marquee from "react-fast-marquee";

const Pinglun: FC<{
	dataSource: {
		authorName: string;
		authorNickname: string;
		avatar: string;
		comment: string;
	}[];
	onClickSignUp: () => void;
}> = ({ dataSource, onClickSignUp }) => {
	return (
		<div className={"relative mb-[125px]"}>
			<Marquee pauseOnHover>
				<div className={"gap-8 py-2 z-10 relative flex h-[300px] mr-8"}>
					{[...dataSource, ...dataSource].map(
						({ authorName, authorNickname, avatar, comment }, index) => {
							return (
								<div
									className={"flex items-center justify-center"}
									key={String(index)}
								>
									<div
										className={
											"inline-block shadow border p-5 w-[360px] rounded bg-white "
										}
										style={{
											border: "1px solid #dfe3e6",
										}}
									>
										<div className={"flex gap-2 pb-4 items-center"}>
											<img
												className={"w-[24px] h-[24px]"}
												src={avatar}
												alt=""
											/>

											<div>
												<div style={{fontSize:'14px'}}>{authorName}</div>
												<div style={{fontSize:'13px'}} className={"text-gray-600"}>@{authorNickname}</div>
											</div>
										</div>
										<div className={""} style={{ lineHeight: 1.5,fontSize:'14px' }}>
											{comment}
										</div>
									</div>
								</div>
							);
						},
					)}
				</div>
			</Marquee>

			<div
				className={
					"bg-[#edf6ff] absolute top-[155px] overflow-hidden w-full h-[500px]"
				}
			>
				<img
					src="/ui/img/signup-stripes.svg"
					className="h-[100vw] w-[140vw]"
					alt="pattern"
				/>
			</div>
			<div className={"relative z-100 text-center"}>
				<h2
					className="text-center pt-20"
					style={{ fontSize: "40px", fontWeight: "bolder" }}
				>
          Catch defects before production without needing to create
          <br/>
          or manage test data.
				</h2>
				<Button
					type={"primary"}
					className={"text-center"}
					size={"large"}
					onClick={onClickSignUp}
				>
					Sign Up
				</Button>
			</div>
		</div>
	);
};

export default Pinglun;
