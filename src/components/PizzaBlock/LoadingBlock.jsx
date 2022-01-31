import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="147" cy="69" r="2" />
      <circle cx="138" cy="125" r="110" />
      <rect x="0" y="265" rx="6" ry="6" width="280" height="30" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="1" y="410" rx="6" ry="6" width="100" height="40" />
      <rect x="140" y="410" rx="20" ry="20" width="140" height="50" />
    </ContentLoader>
  );
}

export default LoadingBlock;
