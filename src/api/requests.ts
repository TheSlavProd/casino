import ky from 'ky'

export interface IParams {
  [key: string]: any;
}

const SESSION_TIMEOUT = 15 * 60 * 1000;
let TIMEOUT_ID: any;

// @ts-ignore
window.activeTimeouts = {};

enum EMethods {
  get = 'get',
  put = 'put',
  post = 'post',
  delete = 'delete',
  patch = 'patch',
}

const formatError = async (e: any) => {
  const details = await e?.response?.json?.();

  return { message: e.message, stack: e.stack, e, details };
};

export enum EBodyMethods {
  JSON = 'json',
  TEXT = 'text',
  BLOB = 'blob',
  FORM_DATA = 'formData',
  ARRAY_BUFFER = 'arrayBuffer',
}

export const fetchFnFactory =
  (methodName: EMethods) =>
  async (url: string, options?: any, bodyMethod?: EBodyMethods) => {
    try {
      const defaultOptions = { timeout: 30000 };
      const reqOptions = options
        ? { ...defaultOptions, ...options }
        : defaultOptions;
      const selectedBodyMethod = bodyMethod ?? EBodyMethods.FORM_DATA;
      // const selectedBodyMethod = 'application/x-www-form-urlencoded';
      
      return await ky[methodName](`${process.env.REACT_APP_API_URL}${url}`, reqOptions)[selectedBodyMethod]?.();
    } catch (e: any) {
      throw await formatError(e);
    }
  };

export const getFn = fetchFnFactory(EMethods.get);
export const postFn = fetchFnFactory(EMethods.post);
export const patchFn = fetchFnFactory(EMethods.patch);
export const deleteRequestFn = fetchFnFactory(EMethods.delete);
export const putFn = fetchFnFactory(EMethods.put);

const refreshTimeout = (timeoutId: any) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    // @ts-ignore
    const { activeTimeouts } = window;
    // @ts-ignore
    window.activeTimeouts = { ...activeTimeouts, [timeoutId]: undefined };
  }

  const reloadPageCallback = async () => {
    try {
      // await getFn(`${getApiBaseUrl()}/technical/session/`);
    } catch (e: any) {
      console.error(e);
    }
  };

  const newTimeoutId = setTimeout(reloadPageCallback, SESSION_TIMEOUT);
  // @ts-ignore
  window.activeTimeouts[newTimeoutId] = [reloadPageCallback, SESSION_TIMEOUT];

  return newTimeoutId;
};

const withSessionTimeoutHandler =
  (requestFn: any) =>
  async (...args: any) => {
    TIMEOUT_ID = refreshTimeout(TIMEOUT_ID);
    // eslint-disable-next-line
    return await requestFn(...args);
  };

export const get = withSessionTimeoutHandler(getFn);

export const post = withSessionTimeoutHandler(postFn);

export const patch = withSessionTimeoutHandler(patchFn);

export const deleteRequest = withSessionTimeoutHandler(deleteRequestFn);

export const put = withSessionTimeoutHandler(putFn);
