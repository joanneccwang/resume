export default {
  info: {
    my_name: '王敬嘉 Joanne Wang',
    position: '前端工程師'
  },
  summary:
    '具六年工作經驗的前端工程師。目前以 Vue3 為主要開發技術。重視設計細節，追求完成友善使用者體驗且 pixel-perfect 的介面。',
  experience: {
    binance: {
      company: '幣安',
      summary1: '負責兩個基於 Vue3 + tsx + CSS in JS 構建的內部 Web 應用，以提升數據團隊的工作效率',
      summary2: '通過每兩周一次的 sprint 和每月一次的新版本發布，保持穩定的功能交付。',
      summary3: '通過 strong typing、eslint 和 code review 來確保程式碼品質',
      summary4: '與設計師、PM 密切合作，使用 Figma 根據需求設計詳細的功能',
      summary5:
        '使用：Vue3 及其生態系、TypeScript、JSX、Ant Design、ECharts、vue-draggable；其他工具：git、JIRA、Figma、Swagger/YApi',
      includes: '參與產品包含：',
      insight_platform: {
        product: '數據洞察平台',
        summary: '一個內部數據洞察平台，提供各種自助工具供數據和財務團隊在日常工作中使用。',
        bullet1: '使用 ECharts 和 jspdf 開發視覺化的財務報表，包含可互動的堆疊圖表和生成 PDF 功能',
        bullet2: '設計可複用且可擴展的元件來建構內部平台功能',
        bullet3: '開發用戶友好的報表生成工具，使數據分析師可以通過拖放操作動態生成數據報表',
        bullet4: '為嵌入的第三方數據平台應用 OAuth 添加 refresh token 機制，以提供更流暢的用戶體驗'
      },
      staff_platform: {
        product: '員工入職平台',
        summary: '一個供新員工快速申請內部工具與了解團隊的平台',
        bullet1: '開發功能包括：平台 tour guide、首頁重構和使用 Antv X6 製作組織結構圖等'
      }
    },
    emotibot: {
      company: '竹間智能科技有限公司',
      summary1: '與工程團隊、設計師、PM 密切合作，以 SPA 模式開發中大型產品平台與專案 RWD 介面',
      summary2: '串接包含 RESTful API 與 WebSocket API 的後端服務',
      summary3: '使用 Vue.js 與其生態系，包含：Vue Router、Vuex、Vue I18n、Vue CLI 和 Element UI',
      summary4: '其他使用技術與工具：Webpack、Eslint、git、ECharts、axios、NGINX、Docker',
      includes: '參與產品包含：',

      AI_bot: {
        product: '智能客服',
        summary:
          '回答客戶常見問題的智能客服對話介面，並提供真人客服後台，當客戶問題超出機器對話範疇時，可即時轉接至真人文字客服提供服務。',
        bullet1: '為不同專案客製化 RWD 智能客服介面與功能，支援裝置包含 PC、平板與手機尺寸',
        bullet2: '開發真人文字客服後台，包含對話接入、多媒體訊息收發、公告系統等功能',
        bullet3:
          '處理對話介面跨瀏覽器相容性問題。瀏覽器包含：Chrome 66+、Firefox 87+、Safari、IE11 和 Edge',
        link: {
          easycard: '悠遊卡智能客服',
          kgi: '凱基證券智能客服'
        }
      },

      voice_platform: {
        product: '語音平台',
        summary: '讓使用者訓練與測試 ASR (語音辨識) 和 TTS (文字轉語音) 技術的平台。',
        bullet1:
          '於一周內開發使用 ASR 技術的逐字稿專案。支援：a. 即時語音辨識，使用者可錄音並透過 WebSocket API 即時獲得轉譯結果 b. 離線語音辨識，使用者可上傳音檔取得轉譯結果',
        bullet2: '維護語音平台功能，重構部分頁面邏輯以利後續維護'
      },

      AICC: {
        product: '智能質檢',
        summary:
          '提供使用者建立質檢規則並上傳客服錄音來評估電話客服表現的智能檢測系統。質檢規則由訓練關鍵字到撰寫對話邏輯的六層架構建立。評估結果以對話形式呈現，包含規則 highlight 與錄音重播功能。',
        bullet1:
          '獨力完成機器質檢核心功能前端開發，包含質檢規則六層架構建立、錄音上傳、結果呈現...等功能',
        bullet2: '開發可高度複用組件，提供建立複雜語義邏輯與呈現評估結果',
        bullet3: '負責前端專案 git flow 管理，與北京人工質檢前端團隊合作',
        bullet4: '開發多語系介面(i18n)，系統支援繁體中文與簡體中文',
        bullet5: '導入 mock.js，按照後端提供的 RESTful API 接口，模擬請求數據，縮短後續介接時間'
      },

      bot_factory: {
        product: 'Bot Factory',
        summary:
          '提供企業用戶透過建立詞庫、對話意圖、FAQ、知識庫等，進而搭建對話場景，客製化對話機器人的平台。',
        bullet1: '開發基本 UI 組件，包含按鈕、下拉選單、表格、分類樹組件...等',
        bullet2: '使用 storybook 管理與撰寫組件文件',
        bullet3: '開發意圖管理、詞庫管理...等頁面'
      }
    }
  },
  education: {
    NCKU: {
      school: '國立成功大學',
      degree: '資訊工程所碩士'
    },
    NTHU: {
      school: '國立清華大學',
      degree: '資訊工程學系學士'
    }
  }
}
