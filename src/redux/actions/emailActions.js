import { createAction } from 'redux-actions';
import emailApi from '../../utils/api/emailApi';

export const postEmailRequest = createAction('POST_EMAIL_REQUEST');
export const postEmailSuccess = createAction('POST_EMAIL_SUCCESS');

export const postEmail = (destinatario) => async (dispatch) => {
  try {
    dispatch(postEmailRequest());
    const { data } = await emailApi.enviarEmail({destinatario});
    dispatch(postEmailSuccess(data));
  } catch (e) {
    dispatch(console.log(e));
  }
};