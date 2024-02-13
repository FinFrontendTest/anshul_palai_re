import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: [], // Initial table data
  },
  reducers: {
    updateTableData: (state, action) => {
      // Update table data based on the action payload
    },
  },
});

export const { updateTableData } = tableSlice.actions;
export const selectTableData = (state) => state.table.data;

export default tableSlice.reducer;
