import { memo } from 'react';
import './SectionTitle.css';

const SectionTitle = memo(({ titleText }) => (
  <h2 className="section-title">{titleText}</h2>
));

export default SectionTitle;
