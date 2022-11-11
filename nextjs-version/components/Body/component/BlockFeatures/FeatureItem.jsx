import React from "react";

export default function FeatureItem(props) {
  const { featureItem } = props;
  return (
    <li className="block-features__item">
      <div className="block-features__item-icon">{featureItem.icon}</div>
      <div className="block-features__item-info">
        <div className="block-features__item-title">{featureItem.title}</div>
        <div className="block-features__item-subtitle">
          {featureItem.subTitle}
        </div>
      </div>
    </li>
  );
}
