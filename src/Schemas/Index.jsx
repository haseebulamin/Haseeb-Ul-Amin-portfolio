import * as Yup from 'yup';

export const submitSchema = ({
 name: Yup.string().min(4).max(25).required("Please! Enter your name."),
 email: Yup.string().email().required("Please! Enter your email."),
 subject: Yup.string().required("Please! Enter subject."),
 message: Yup.string().min(100).required("Please! Enter message.."),
});