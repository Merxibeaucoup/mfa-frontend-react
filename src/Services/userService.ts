import axiosInstance from "./axiosInstance";
import { ApiResponse } from "./axiosInstance";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mfaEnabled: boolean;
  secretImageUri?: string; // only for mfaEnabled
}

const userService = {
  // register user
  async create(data: IUser): Promise<ApiResponse<IUser>> {
    try {
      const response = await axiosInstance.post<IUser>("/register", data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message,
        data: {} as IUser,
      };
    }
  },
};

export default userService;
