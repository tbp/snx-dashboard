# Развертывание SNX Dashboard на Vercel

## 🚀 Быстрое развертывание

### Вариант 1: Через Vercel CLI (рекомендуется)

1. **Установите Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Войдите в аккаунт Vercel**
   ```bash
   vercel login
   ```

3. **Разверните проект**
   ```bash
   vercel
   ```
   
   При первом развертывании Vercel задаст несколько вопросов:
   - Set up and deploy "~/path/to/snx-dashboard"? **Y**
   - Which scope do you want to deploy to? **Выберите свою команду**
   - Link to existing project? **N**
   - What's your project's name? **snx-dashboard** (или любое другое имя)
   - In which directory is your code located? **./** 

4. **Для продакшен развертывания**
   ```bash
   vercel --prod
   ```

### Вариант 2: Через Vercel Dashboard

1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "New Project"
3. Импортируйте репозиторий `git@github.com:tbp/snx-dashboard.git`
4. Vercel автоматически определит Next.js и настроит сборку
5. Нажмите "Deploy"

## ⚙️ Конфигурация

### Переменные окружения

Создайте следующие переменные окружения в Vercel Dashboard:

```bash
# Обязательные
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app

# Опциональные
NEXT_PUBLIC_DEFAULT_CMS_ID=your-cms-id
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Настройки проекта в Vercel

- **Framework Preset**: Next.js
- **Node.js Version**: 18.x (автоматически из package.json)
- **Build Command**: `npm run build` (настроено в vercel.json)
- **Output Directory**: `.next` (настроено в vercel.json)
- **Install Command**: `npm install` (настроено в vercel.json)

## 📁 Файлы конфигурации

### vercel.json
Основной файл конфигурации Vercel с настройками:
- Команды сборки и установки
- Заголовки безопасности
- Кэширование статических файлов
- Редирект с корня на /dashboard
- Настройки функций

### .vercelignore
Исключает из развертывания:
- node_modules
- Локальные env файлы
- IDE файлы
- Временные папки
- Логи

### .env.example
Шаблон переменных окружения для копирования в Vercel Dashboard.

## 🔧 Оптимизация для Vercel

### Автоматические оптимизации
- ✅ Статическая генерация страниц
- ✅ Автоматическое разделение кода
- ✅ Оптимизация изображений (Next.js Image)
- ✅ Сжатие и минификация
- ✅ Edge Functions для быстрой загрузки

### Настроенные заголовки
- `Cache-Control` для статических файлов (1 год)
- Заголовки безопасности (XSS, CSRF защита)
- Content-Type защита

## 📊 Мониторинг

После развертывания доступны:
- **Analytics**: Автоматический мониторинг производительности
- **Speed Insights**: Метрики скорости загрузки
- **Function Logs**: Логи серверных функций
- **Build Logs**: Логи процесса сборки

## 🌐 Домены

### Автоматический домен
Vercel автоматически создаст домен вида: `snx-dashboard-xxx.vercel.app`

### Пользовательский домен
1. Перейдите в Settings → Domains
2. Добавьте свой домен
3. Настройте DNS записи согласно инструкциям Vercel

## 🔄 Автоматические развертывания

После настройки каждый push в ветку `main` будет автоматически:
1. Запускать сборку проекта
2. Проводить тесты (если настроены)
3. Развертывать новую версию
4. Обновлять production URL

### Preview развертывания
- Каждый PR создает preview URL
- Можно тестировать изменения до мержа
- Автоматическое удаление после закрытия PR

## 🚨 Устранение проблем

### Ошибки сборки
```bash
# Проверьте сборку локально
npm run build

# Проверьте типы
npm run type-check
```

### Проблемы с зависимостями
```bash
# Очистите кэш и переустановите
rm -rf node_modules package-lock.json
npm install
```

### Проблемы с виджетом отзывов
- Убедитесь, что файлы в `/public/dist/` доступны
- Проверьте переменную `NEXT_PUBLIC_WIDGET_SCRIPT_URL`
- В development режиме виджет может не загружаться (это нормально)

## 📞 Поддержка

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Готово!** 🎉 Ваш SNX Dashboard теперь готов к развертыванию на Vercel.
