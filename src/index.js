import data from './data/chart_data'
import { MainChart } from './charts/main.chart'
import { transformData } from './utils'
import themes from './themes'
import './scss/index.scss'

const chart = new MainChart({
  el: document.getElementById('chart'),
  width: 800,
  height: 400,
  data: transformData(data[4])
})

const charts = [chart]

// Dark Theme
document.querySelector('#theme-switch').addEventListener('click', event => {
  event.preventDefault()
  const theme = event.target.dataset.theme
  document.body.classList.toggle('main-night')
  event.target.textContent = theme === 'night'
    ? 'White Theme'
    : 'Dark Theme'
  event.target.setAttribute('data-theme', theme === 'night' ? 'day' : 'night')

  charts.forEach(c => c.setTheme(themes[theme]))
})