import type { FC } from "react";

const Learn: FC<{ copywriter: string[] }> = ({ copywriter }) => {
	return (
		<>
			<section className="bg-[#1B1D1E] text-[#ecedee] py-28">
				<div className="relative mx-auto w-full max-w-screen-xl-gutters px-6 !max-w-[600px]">
					{copywriter.map((item, index) => {
						return (
							<p
								key={String(index)}
								className="text-[20px] leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] text-secondary mb-8 !font-normal"
							>
								{item}
							</p>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Learn;
