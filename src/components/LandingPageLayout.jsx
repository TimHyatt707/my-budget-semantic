import React from 'react';

export default function LandingPageLayout(components) {
  return (
    <div id="layout-wrapper">
      { components.children[0] }
      { components.children[1] }
    </div>
  );
}
