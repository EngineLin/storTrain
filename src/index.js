export default class StoreTrain {
  /**
   * @param {Object} options
   */
  constructor(options = {}) {
    this.options = {
      // ...options,
    };
    this.document = document;
    this.window = window;

    this.bind = this.bind.bind(this);
    this.get = this.get.bind(this);
  }

  /**
   * 用來建構連結到其他頁面的 DOM 以及想要攜帶值的 input DOM。
   * @param {Object} options
   */
  bind({ el, value, linkTo }) {
    if (typeof value !== 'object') return;
    if (typeof linkTo !== 'string') return;

    this.document.querySelector(el).addEventListener('click', e => {
      e.preventDefault();
      this.window.localStorage['storetrain'] = JSON.stringify(value);
      this.window.location.href = linkTo;
    });
  }

  /**
   * @param {string/array/object} 選擇要許出的資料。
   * 字串: 單純的提取某個值，並移除該 Key 值底下的內容。
   * 陣列: 提取單、複數的值，並移除該 Key 值底下的內容。
   * 物件: 提取單、複數的值，可以針對後續行為個別進行設定。
   * @return {object} 包含提取目標的 key: value 的物件。
   */
  get(selector) {
    const result = {};
    let value = this.window.localStorage['storetrain'];

    console.log(value);
    // if ()

    if (typeof selector === 'string' && selector) {
      result[selector] = JSON.parse(JSON.stringify(value[selector]));
      delete value[selector];

      if (Object.keys(value).length) {
        value = JSON.stringify(value);
        this.window.localStorage['storetrain'] = value;
      } else {
        this.window.localStorage.removeItem['storetrain'];
      }

      return result;
    }
  }
}
