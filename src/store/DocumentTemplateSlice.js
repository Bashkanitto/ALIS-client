import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const DOCUMENT_TEMPLATE_API =
  'https://alis-server-production.up.railway.app/documentTemplate';

const initialState = {
  result: [],
  isLoading: true,
};

export const documentTemplateSlice = createSlice({
  name: 'documentTemplate',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDocumentTemplates.fulfilled, (state, action) => {
      state.isLoading = false;
      state.result = action.payload;
    });
    builder.addCase(deleteDocumentTemplate.fulfilled, (state, action) => {
      state.result = state.result.filter(
        documentTemplate => documentTemplate._id !== action.payload._id,
      );
    });
  },
});

export const fetchDocumentTemplates = createAsyncThunk(
  'documentTemplate/fetchAll',
  // eslint-disable-next-line no-unused-vars
  async (user, thunkAPI) => {
    const response = await axios.get(DOCUMENT_TEMPLATE_API);

    return response.data;
  },
);

export const deleteDocumentTemplate = createAsyncThunk(
  'documentTemplate/delete',
  async (id, thunkAPI) => {
    const response = await axios.delete(`${DOCUMENT_TEMPLATE_API}/${id}`);
    return response.data;
  },
);

export const {} = documentTemplateSlice.actions;

export default documentTemplateSlice.reducer;
