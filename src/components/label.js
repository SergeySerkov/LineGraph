export class Label {
  constructor(options) {
    this.name = options.name
    this.color = options.color
  }

  toHtml() {
    return `
      <div class="main-chart-checkbox">
        <input 
          type="checkbox" 
          value="${this.name}" 
          checked
        />
        <label>
          <span
            style="border-color: ${this.color}"
          ></span>
          ${this.name}
        </label>
      </div>
    `
  }
}