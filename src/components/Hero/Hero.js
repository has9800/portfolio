import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hasan Ahmed
        </SectionTitle>
        <SectionText>
          Creating smart, accessible, scalable, and modern UIs using React, NextJS, and more...
        </SectionText>
        <Button onClick={() => window.open('https://drive.google.com/drive/folders/1cEGqzKvu8ClFqlAXKMcvleZAq8gXVnHj')}>Download my CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;