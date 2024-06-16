import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { deleteDocumentTemplate } from '../store/DocumentTemplateSlice';

/* eslint-disable react/prop-types */
const DocumentListItem = ({ document = {}, onDocumentSelect }) => {
  const dispatch = useDispatch();

  const { name = '', docType = '', createdAt = '' } = document;

  const date = new Date(createdAt);
  const formattedCreatedAt = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleItemDelete = e => {
    e.stopPropagation();
    dispatch(deleteDocumentTemplate(document._id));
  };

  return (
    <div
      className="document-template-table-item "
      onClick={onDocumentSelect(document)}
    >
      <p>{name}</p>
      <p>{docType}</p>
      <div className="document-item-action-wrapper">
        <p>{formattedCreatedAt}</p>
        <button onClick={handleItemDelete}>
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default DocumentListItem;
