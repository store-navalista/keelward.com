import React, { FC } from 'react';
import { IMainBlock } from '../../../types/pages/main';
import ExploreButton from '../../UI/btn-explore/ExploreButton';
import st from './MainBlockService.module.scss';

const MainBlockService: FC<{ blocks: IMainBlock[] }> = ({ blocks }) => {
	const letters = 137;
	return (
		<>
			{blocks.map((block, i) => {
				const { title, description, url, icon } = block;
				return (
					<div key={i} className={st.block}>
						<span className={st.border} />
						<div>
							<h2>{title}</h2>
							<span style={{
								backgroundImage: `url(/assets/images/svg/${icon})`
							}} />
						</div>
						<p>{description.substring(0, letters)}...</p>
						<ExploreButton href={url} />
					</div>
				)
			})}
		</>

	)
}

export default MainBlockService;
