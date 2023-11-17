import axiosInstance from "./axiosInstance";
import { ApiResponse } from "./axiosInstance";

export interface IVerification {
  email: string;
  code: string;
}

const mfaVerificationService = {
  //verify mfaCode
  async verify(data: IVerification): Promise<ApiResponse<IVerification>> {
    try {
      const response = await axiosInstance.post<IVerification>("/verify", data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message,
        data: {} as IVerification,
      };
    }
  },
};

export default mfaVerificationService;
