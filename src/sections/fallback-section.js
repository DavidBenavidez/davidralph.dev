import React from 'react';
import { Heading } from '@common';

export default () => {
  return (
    <div className="section third-section third-section-fallback">
      <div className="fixed-section fixed-section-fallback">
        <div
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
          className="experience-heading-container"
        >
          <Heading size="hero" white>
            Experience
          </Heading>
        </div>
      </div>
    </div>
  );
};
