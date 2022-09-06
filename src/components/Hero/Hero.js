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
        <Button onClick={() => window.open('https://docs.google.com/document/d/1vkYLdvrN3tRqJ8n_yU5UO-WnjnxwX3S-/edit?usp=sharing&ouid=104268776997702019774&rtpof=true&sd=true')}>Download my CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
