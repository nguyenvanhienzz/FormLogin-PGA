import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập họ tên"),
  email: Yup.string().email("Email không hợp lệ!").required('Vui lòng nhật email'),
  password: Yup.string().min(6, "Password phải lớn hơn 6 kí tự")
    .max(50, "Password phải nhở hơn 50 kí tự")
    .required("Vui lòng nhập password"),
  repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Password không đúng'),
  genders: Yup.string().required("Vui lòng chọn giới tính"),
  state: Yup.string().required("Vui lòng chọn thành phố"),
  region: Yup.string().required("Vui lòng chọn quốc gia"),


});