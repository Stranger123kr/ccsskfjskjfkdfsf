import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// -------------------------------------------------

// SignUp User

export const SignUpUser = createAsyncThunk(
  "SignUpUser",
  async (UserInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/singUp",
        UserInfo
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// -------------------------------------------------

// Login User

export const LoginUser = createAsyncThunk(
  "LoginUser",
  async (UserInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/login",
        UserInfo
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// -------------------------------------------------

// Create Todo

export const CreateTodo = createAsyncThunk(
  "CreateTodo",
  async (UserInfo, { rejectWithValue }) => {
    console.log(UserInfo.todo);
    console.log(UserInfo.id);

    try {
      const { data } = await axios.post("http://localhost:5000/api/v2/create", {
        title: UserInfo.todo.title,
        body: UserInfo.todo.body,
        id: UserInfo.id,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// -------------------------------------------------
// Read Todo By id

export const ReadTodo = createAsyncThunk(
  "ReadTodo",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v2/read/${id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// -------------------------------------------------
// delete Todo By id

export const DeleteTodo = createAsyncThunk(
  "DeleteTodo",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v2/delete/${id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// -------------------------------------------------

// -------------------------------------------------

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    User: [],
    Todo: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    LoginOut(state, action) {
      state.isLoading = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(SignUpUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(SignUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.User = action.payload;
        toast.success(state.User.msg);
      })
      .addCase(SignUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        if (state.error.response.status === 403) {
          toast.error(state.error.response.data);
        } else if (state.error.response.status === 406) {
          toast.error(state.error.response.data);
        } else {
          toast.error(state.error);
        }
      })

      // ------------------------------------------------------

      .addCase(LoginUser.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = true;
        state.User = action.payload;
        toast.success(state.User.msg);
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        if (state.error.response.status === 400) {
          toast.error(state.error.response.data);
        } else if (state.error.response.status === 401) {
          toast.error(state.error.response.data);
        } else {
          toast.error(state.error);
        }
      })

      // ------------------------------------------------------

      .addCase(CreateTodo.pending, (state, action) => {
        // state.isLoading = false;
      })
      .addCase(CreateTodo.fulfilled, (state, action) => {
        // state.isLoading = true;
        state.Todo.push(action.payload);
        toast.success(state.User.msg);
      })
      .addCase(CreateTodo.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      })

      // ------------------------------------------------------

      .addCase(ReadTodo.pending, (state, action) => {
        // state.isLoading = false;
      })
      .addCase(ReadTodo.fulfilled, (state, action) => {
        // state.isLoading = true;
        state.Todo = action.payload;
      })
      .addCase(ReadTodo.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      })

      // ------------------------------------------------------

      .addCase(DeleteTodo.pending, (state, action) => {
        // state.isLoading = false;
      })
      .addCase(DeleteTodo.fulfilled, (state, action) => {
        // state.isLoading = true;
        state.Todo = action.payload;
      })
      .addCase(DeleteTodo.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { LoginOut } = TodoSlice.actions;

export default TodoSlice.reducer;
