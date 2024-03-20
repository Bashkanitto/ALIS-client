import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const breadcrumbsItems = [
  { text: 'Организация', to: '/settings' },
  { text: 'Сотрудники', to: '/settings' },
  { text: 'Контрагент', to: '/settings' },
  { text: 'Документ', to: '/settings' },
];

function CustomBreadcrumbs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="flex gap-4">
      {breadcrumbsItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.to}
            className={
              index === activeIndex
                ? 'text-inherit border-b-2 border-blue-500 text-decoration-none'
                : ' text-inherit'
            }
            onClick={() => setActiveIndex(index)}
          >
            {item.text}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default CustomBreadcrumbs;
