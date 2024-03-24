'use client';
import { useState } from 'react';
import classes from './page-tab.module.css';
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className={`${classes.tabs}`}>
        {children.map((child, index) => (
          <button
            key={index}
            className={
              activeTab === index
                ? `${classes.tab_child} ${classes.active}`
                : `${classes.tab_child}`
            }
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className={`${classes.tab_content}`}>{children[activeTab]}</div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <div>{children}</div>;
};

export default Tabs;
