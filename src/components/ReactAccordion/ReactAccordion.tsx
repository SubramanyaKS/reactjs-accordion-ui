import React, { useState } from 'react';
import './reactAccordion.css';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  width?: string;
  headerBackgroundColor?: string;
  contentBackgroundColor?: string;
  collapseIcon?: React.ReactNode;
  expandIcon?: React.ReactNode;
}

const ReactAccordion: React.FC<AccordionProps> = ({
  items,
  width = "500px",
  headerBackgroundColor = "#ccc",
  contentBackgroundColor = "#fff",
  expandIcon,
  collapseIcon
}) => {
  const [openItems, setOpenItems] = useState<boolean[]>(Array(items.length).fill(false));

  const toggleItem = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className="accordion" style={{ width: width }}>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div style={{ display: "flex", backgroundColor: headerBackgroundColor }}>
            <div style={{ backgroundColor: headerBackgroundColor, display: "flex" }} className="accordion-header" onClick={() => toggleItem(index)}>
              {item.title}
            </div>
            {openItems[index] ? (collapseIcon ? collapseIcon : null):(expandIcon ? expandIcon : null)}
          </div>
          {openItems[index] && (
            <div style={{ backgroundColor: contentBackgroundColor }} className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReactAccordion;
