// [ Base URL: fesp-api.koyeb.app/todo ]

import axios from "axios";

const url = "/api/todo";
export async function listApi() {
  try {
    const response = await axios.get(url);
    const data = response.data; // json 파싱이 필요 없음
    console.log(data);
    return data;
  } catch (err) {
    // 네트워크 에러나 4xx, 5xx HTTP 응답 에러 일괄 처리
    console.error(err);
  }
}
