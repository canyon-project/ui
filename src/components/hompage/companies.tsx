import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import type React from "react";
import type { FC } from "react";

import { createStyles } from "antd-style";
import Margin from "../margin.tsx";

const contentStyle: React.CSSProperties = {
	height: "160px",
	lineHeight: "160px",
	textAlign: "center",
};

const useStyles = createStyles(({ token: _, css }) => ({
	carousel: css`.slick-dots>li.slick-active>button{
    background: #f1f3f5;
  }
  .slick-dots>li>button:after{
    background: #c1c8cd;
  }
`,
}));
const Companies: FC<{
	topRightButton: React.ReactNode;
	dataSource?: {
		image: React.ReactNode;
		zIndex: number;
	}[];
}> = ({ dataSource = [] }) => {
	const { styles, cx } = useStyles();

	return (
		<Margin>
			<div className={cx(styles.carousel)}>
				<div className={"flex justify-between mb-10"}>
					<span style={{ fontWeight: 500, fontSize: 16 }}>
						Trusted by top companies
					</span>
					<Button shape={"round"}>
						Read Their Stories
						<ArrowRightOutlined />
					</Button>
				</div>
				<Carousel autoplay autoplaySpeed={5000}>
					{[...new Set(dataSource.map(({ zIndex }) => zIndex))].map(
						(_, index) => {
							return (
								<div key={String(index)}>
									<div className={"flex justify-around"}>
										{dataSource
											.filter((i) => i.zIndex === index)
											.map((i, index2) => {
												return (
													<div key={String(index2)}>
														<div style={contentStyle}>{i.image}</div>
													</div>
												);
											})}
									</div>
								</div>
							);
						},
					)}
				</Carousel>
			</div>
		</Margin>
	);
};

export default Companies;
