import Settings from '../components/Settings';
import DocumentForm from '../components/DocumentForm.jsx';
import OrganizationForm from '../components/OrganizationForm.jsx';

export default [
  {
    path: '/documents',
    element: <DocumentForm />,
  },
  {
    path: '/generation',
    element: <OrganizationForm />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
];
