import { DefaultErrorType, SizeInfoType, ProductColorType, ProductSizeType, AjaxResType, ProductType } from "@/lib/globalts";

interface AddUserRes {
  user: any;
}
export const setUserApi = async (): Promise<AjaxResType<AddUserRes, DefaultErrorType>> => {
  const res = await fetch('/api/setUser', {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });

  console.log('res', res);

  try {
    const repo = await res.json()
    return repo;

  } catch (error) {
    console.log('error', error)
    return {
      code: 1,
      message: 'worng',
      data: null,
    }

  }
}