import { configureStore } from '@reduxjs/toolkit';

import userSlice from './UserSlice';
import ThemeSlice from './ThemeSlice';
import DocumentTemplateSlice from './DocumentTemplateSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    theme: ThemeSlice,
    documentTemplate: DocumentTemplateSlice,
  },
});
