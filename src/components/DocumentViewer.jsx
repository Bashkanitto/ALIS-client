/* eslint-disable react/prop-types */
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

const DocumentViewer = ({ path }) => {
  const docs = [
    {
      uri: path,
      fileType: 'docx',
    },
  ];

  return (
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      documents={docs}
      config={{
        header: {
          disableHeader: true,
        },
      }}
      style={{ height: '85vh' }}
    />
  );
};

export default DocumentViewer;
