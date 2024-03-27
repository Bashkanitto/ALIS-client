export const Editor = () => {
  const docId = '1l952JQrzvMqHM6uEGMdouwOqrhdxCdjmgO2He59flcs';
  const src = `https://docs.google.com/document/d/${docId}/edit`;

  return (
    <iframe
      src={src}
      width="1000px"
      height="600px"
      title="Google Document"
      frameBorder
    ></iframe>
  );
};
