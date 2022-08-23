import { object, string, number, date, InferType, ref } from 'yup';

const Validation = object({
    email: string().email("Geçerli bir mail giriniz").required("Mail boş bırakılamaz"),
    password: string().min(5).required("Şifre boş bırakılamaz"),
    rePassword: string().oneOf([ref('password')], "Şifreler eşleşmiyor").required("Şifreyi yeniden giriniz"),
});
export default Validation;