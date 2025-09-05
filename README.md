# SNX Dashboard

Современный веб-дашборд для управления виджетами отзывов, построенный на Next.js 15 с использованием React 19, Tailwind CSS 4 и shadcn/ui компонентов.

## 🚀 Особенности

- **Современный стек**: Next.js 15, React 19, TypeScript 5
- **Стилизация**: Tailwind CSS 4 с поддержкой CSS переменных
- **UI компоненты**: shadcn/ui с темой "New York"
- **Виджет отзывов**: Встроенный виджет для отображения отзывов с CMS
- **Адаптивный дизайн**: Полностью адаптивный интерфейс с поддержкой мобильных устройств
- **Настройки в реальном времени**: Панель настроек для конфигурации виджетов
- **Боковая панель**: Современная навигация с возможностью сворачивания

## 📦 Технологии

### Основные зависимости
- **Next.js** 15.5.2 - React фреймворк с поддержкой Turbopack
- **React** 19.1.0 - Библиотека для создания пользовательских интерфейсов
- **TypeScript** 5 - Типизированный JavaScript
- **Tailwind CSS** 4 - Utility-first CSS фреймворк

### UI библиотеки
- **Radix UI** - Доступные компоненты без стилей
- **Lucide React** - Современные SVG иконки
- **Remix Icon** - Дополнительные иконки
- **shadcn/ui** - Готовые компоненты с современным дизайном

### Утилиты
- **clsx** - Условное объединение CSS классов
- **tailwind-merge** - Умное слияние Tailwind классов
- **class-variance-authority** - Создание вариантов компонентов

## 🛠 Установка и запуск

### Предварительные требования
- Node.js 18+ 
- npm или yarn

### Установка
```bash
# Клонирование репозитория
git clone git@github.com:tbp/snx-dashboard.git
cd snx-dashboard

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

### Доступные команды
```bash
# Разработка с Turbopack
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm start

# Линтинг кода
npm run lint
```

## 📁 Структура проекта

```
snx-dashboard/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Страница дашборда
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── components/            # React компоненты
│   ├── ui/               # shadcn/ui компоненты
│   ├── app-sidebar.tsx   # Боковая панель навигации
│   ├── reviews-widget.tsx # Виджет отзывов
│   ├── settings-panel.tsx # Панель настроек
│   ├── widgets.tsx       # Контейнер виджетов
│   └── ...
├── hooks/                # Пользовательские хуки
├── lib/                  # Утилиты и конфигурация
├── public/               # Статические файлы
│   └── dist/            # Собранные файлы виджета
└── dist/                # Дистрибутивы виджета
```

## 🎨 Компоненты

### Основные компоненты
- **AppSidebar** - Навигационная боковая панель с переключателем команд
- **ReviewsWidget** - Виджет для отображения отзывов из CMS
- **SettingsPanel** - Панель настроек с контролами для виджетов
- **UserDropdown** - Выпадающее меню пользователя
- **Widgets** - Контейнер для размещения виджетов

### UI компоненты (shadcn/ui)
- Button, Input, Label, Textarea
- Dialog, Popover, Tooltip
- Select, Checkbox, Slider
- Avatar, Badge, Progress
- Sidebar, ScrollArea, Separator
- И многие другие...

## 🔧 Конфигурация

### Tailwind CSS
Проект использует Tailwind CSS 4 с настройкой CSS переменных для темизации. Конфигурация находится в `components.json`.

### shadcn/ui
```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide"
}
```

## 📱 Виджет отзывов

Проект включает в себя встроенный виджет отзывов с следующими возможностями:

- **Динамическая загрузка**: Автоматическая загрузка скрипта виджета
- **Настройки в реальном времени**: Изменение параметров через панель настроек
- **Гибкая конфигурация**: Поддержка различных CMS ID и параметров отображения
- **Обработка ошибок**: Graceful fallback при недоступности скрипта

### Параметры виджета
- `cmsId` - Идентификатор CMS системы
- `maxReviews` - Максимальное количество отзывов
- `showHeader` - Показывать заголовок
- `showFilters` - Показывать фильтры
- `showPagination` - Показывать пагинацию

## 🚀 Развертывание

### Vercel (рекомендуется)
```bash
# Установка Vercel CLI
npm i -g vercel

# Развертывание
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Участие в разработке

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект является частной разработкой. Все права защищены.

## 🔗 Полезные ссылки

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)

---

Создано с ❤️ для SNX проекта