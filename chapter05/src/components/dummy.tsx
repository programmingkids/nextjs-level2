import { timeout } from '@/app/_lib/functions';

export const Dummy = async function () {
  // 3秒間待機する
  await timeout(3000);

  // 待機後にレンダリングするが実際には何も表示しない
  return '';
};
