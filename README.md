# Getting Started with Create React App

專案使用 [Create React App](https://github.com/facebook/create-react-app) 創建，使用 `React`、`TypeScript`、`CSS Module`

## 啟動專案

1. `yarn` - 安裝依賴
2. `yarn start` - 啟動 Localhost 預覽結果

## Main Functions & Components

1. [addComma](https://github.com/hakudevtw/yoyo-demo/blob/6ca076117e545e1ceea89714c235b4c25045d236/src/utils/numberUtils.ts#L33)

   - 下方提供另外兩種自己較長使用的處理方式

2. [getNumberIntervals](https://github.com/hakudevtw/yoyo-demo/blob/6ca076117e545e1ceea89714c235b4c25045d236/src/utils/numberUtils.ts#L3)

   - 運算過程確保 range 的順序為 [start, end]，只有兩個數字而已因此選擇使用原生 sort 進行排列

3. [PriceInput](https://github.com/hakudevtw/yoyo-demo/blob/main/src/components/form/price-input.tsx)

   - 支援小數 & 負數
   - 無限制最大最小值
   - 顯示時加上千分位逗號，取得的數值為數字

4. [AgeGroupSelect](https://github.com/hakudevtw/yoyo-demo/blob/main/src/components/form/age-group-select.tsx)

   - 選項限制 0 ~ 20，可彈性調整
   - 新增列時，初始年齡範圍為完整區間，也就是 0 ~ 20
   - 區間起始值進行限制，避免不合理的選擇
   - 允許起始值相同

5. [AgeGroupPriceList](https://github.com/hakudevtw/yoyo-demo/blob/main/src/components/form/age-group-price-list.tsx)

   - 資料存放格式 `AgeGroupPrice[]`

     ```typescript
     interface AgeGroupPrice {
       ageGroup: [number, number];
       price: number;
     }
     ```

   - 最多筆數設定為 3 筆，可彈性調整
   - 滿足所有須間或是到達筆數上限會 disable 按鈕

6. [App](https://github.com/hakudevtw/yoyo-demo/blob/main/src/App.tsx)

   - 表單的存放和驗證主要集中在 App 處理
   - 點擊 Validate 後使用 [validateData](https://github.com/hakudevtw/yoyo-demo/blob/main/src/utils/formUtils.ts#L4) 依需求進行簡單的驗證
     - `price` 必填
     - 多筆 `ageGroup` 的區間不能重疊
   - 驗證通過跳出提示，反之顯示錯誤訊息
   - 重新對畫面任意欄位修改後會消除錯誤訊息
