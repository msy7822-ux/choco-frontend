import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// Recoil実装のサンプル
export const countState = atom({
  key: 'count',
  default: 0,
  // データを永続化させたい場合は、下記の一行を追加するだけ（recoil persistライブラリ）
  effects_UNSTABLE: [persistAtom]
});

export const departmentState = atom({
  key: 'department',
  default: 0
});

export const conditionState = atom({
  key: 'condition',
  default: 0
});

export const titleState = atom({
  key: 'title',
  default: ''
});

export const descriptionState = atom({
  key: 'description',
  default: ''
});

export const priceState = atom({
  key: 'price',
  default: 0
})
