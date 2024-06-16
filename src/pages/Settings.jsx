import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DocumentUploader from '../components/DocumentUploader';
import { fetchDocumentTemplates } from '../store/DocumentTemplateSlice';
import DocumentViewer from '../components/DocumentViewer';
import DocumentListItem from '../components/DocumentListItem';

const Settings = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const dispatch = useDispatch();
  const documentTemplates = useSelector(state => state.documentTemplate.result);

  const handleDocumentPreview = document => () => setSelectedDocument(document);

  useEffect(() => {
    dispatch(fetchDocumentTemplates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="template-generation-wrapper">
      <h2>Загруженные шаблоны</h2>
      <DocumentUploader />
      <>
        <div className="document-select-wrapper">
          <div className="document-template-table-title">
            <p>Название документа</p>
            <p>Категория</p>
            <p>Дата</p>
          </div>
          {documentTemplates.length > 0 &&
            documentTemplates.map(document => (
              <DocumentListItem
                key={document._id}
                document={document}
                onDocumentSelect={handleDocumentPreview}
              />
            ))}
        </div>
      </>
      {selectedDocument && (
        <DocumentViewer
          path={`https://alis-server-production.up.railway.app/uploads/${selectedDocument.fileId}`}
        />
      )}
    </div>
  );
};

export default Settings;
