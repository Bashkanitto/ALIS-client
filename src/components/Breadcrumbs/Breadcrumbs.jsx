import { NavLink } from 'react-router-dom';

const breadcrumbsItems = [
  { text: 'Организация', to: '/settings' },
  { text: 'Сотрудники', to: '/employees' },
  { text: 'Контрагент', to: '/counterparty' },
  { text: 'Документ', to: '/document' },
];

function CustomBreadcrumbs() {
  return (
    <nav className="flex gap-4">
      {breadcrumbsItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive, isPending }) =>
              isPending
                ? 'text-inherit text-decoration-none'
                : isActive
                ? 'text-inherit border-b-2 border-blue-500 text-decoration-none'
                : ' text-inherit'
            }
          >
            {item.text}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default CustomBreadcrumbs;
