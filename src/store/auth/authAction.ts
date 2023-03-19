import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { config } from '../../@configuration-form';

const initialState: any = config.reduce((obj: any, item) => {
  obj[item.id] = item?.defaultValue || '';

  return obj;
}, {});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<any>) => ({ ...state, ...action.payload }),
    // save: (state) => ({ ...state }),
  },
});

// Action creators are generated for each case reducer function
export const { save } = userSlice.actions;

export default userSlice.reducer;
