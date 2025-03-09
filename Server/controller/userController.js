import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";

export const register = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return next(new ErrorHandler("User Avatar Required!", 400));
    }
    const { avatar } = req.files;
    const allowedFormats = [
      "image/png",
      "image/jpeg",
      "image/webp",
      "image/avif",
    ];
    if (!allowedFormats.includes(avatar.mimetype)) {
        return next(
          new ErrorHandler(
            "Please provide avatar in png,jpg,webp or avif format!",
            400
          )
        );
      }
      const {name,email,phone,password} = req.body;
    })


export const login = catchAsyncError((req,res,next) => {});
export const logout = catchAsyncError((req,res,next) => {});
export const myProfile = catchAsyncError((req,res,next) => {});
