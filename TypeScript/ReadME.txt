1. Создать базовый проект:


### 1. Установите Node.js и npm
Убедитесь, что у вас установлены [Node.js](https://nodejs.org/) и npm (они поставляются вместе).

---

### 2. Инициализируйте проект
```bash
npm init -y          # Инициализируйте проект (создаст package.json)
```

---

### 3. Установите TypeScript
```bash
npm install typescript --save-dev          # Локальная установка TypeScript
npm install @types/node --save-dev        # Типы для Node.js (опционально)
npm install ts-node --save-dev            # Для запуска TS-файлов без компиляции
```

---

### 4. Создайте конфигурационный файл TypeScript
```bash
npx tsc --init        # Создаст tsconfig.json
```

Пример минимальной конфигурации `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

### 5. Создайте структуру папок
```bash
mkdir src      # Папка для исходников TypeScript
mkdir dist     # Папка для скомпилированного JavaScript
```

---

### 6. Напишите пример кода
Создайте файл `src/index.ts`:
```typescript
const greeting: string = "Hello, TypeScript!";
console.log(greeting);
```

---

### 7. Добавьте скрипты в package.json
```json
{
  "scripts": {
    "build": "tsc",
    "start": "ts-node src/index.ts",
    "dev": "tsc --watch & nodemon dist/index.js"
  }
}
```

---

### 8. Запуск проекта
- **Компиляция TypeScript в JavaScript**:
  ```bash
  npm run build     # Создаст файлы в папке dist
  ```

- **Запуск через ts-node**:
  ```bash
  npm run start     # Выполнит код без компиляции
  ```

---

### Дополнительно
- Установите **nodemon** для автоматической перезагрузки:
  ```bash
  npm install nodemon --save-dev
  ```

- Для работы с ESLint:
  ```bash
  npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
  ```

---

Теперь ваш проект готов к разработке на TypeScript! 🚀