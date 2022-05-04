import './SafariAttention.css';

export default function SafariAttention() {
  return(
    <div className="safari-attention">
      Сейчас сайт отображается в демонстрационном режиме. API для получения карточек перелетов находятся на другом
      домене и Safari по умолчанию блокирует такие CORS запросы. Пожалуйста, воспользуйтесь любым другим браузером, например, Google Chrome
      или FireFox.
    </div>
  )
}