# Simulador de Serviços Meteorológicos com Promise.any

Este é um projeto em Node.js que demonstra o uso de `Promise.any` para obter um resultado do primeiro de vários serviços assíncronos que responder com sucesso.

## 📜 Descrição

O objetivo é simular a consulta a três fontes de dados meteorológicos diferentes. O script executa todas as consultas simultaneamente e retorna a temperatura do primeiro serviço que responder com sucesso, ignorando aqueles que falham ou são mais lentos.

Este padrão é útil em cenários de alta disponibilidade, onde você pode ter fontes de dados redundantes e deseja a resposta mais rápida possível.

## ✨ Como Funciona

O projeto é dividido em três arquivos principais:

1.  **`weatherServices.js`**: Contém uma função `simulateWeatherService` que cria "serviços" falsos. Cada serviço retorna uma `Promise` que resolve ou rejeita após um certo tempo.
2.  **`solution.js`**: Exporta a função `getFirstValidTemperature`, que utiliza `Promise.any` para invocar os três serviços. `Promise.any` aguarda e retorna o valor da primeira promise que for resolvida.
3.  **`index.js`**: O ponto de entrada da aplicação. Ele chama `getFirstValidTemperature` e usa `.then()` para exibir o resultado bem-sucedido ou `.catch()` para lidar com o caso em que todos os serviços falham.

### Fluxo de Execução

-   `Weather B` (200ms) falha e é ignorado.
-   `Weather A` (400ms) responde com sucesso.
-   `Promise.any` resolve com o valor de `Weather A`.
-   O resultado de `Weather A` é impresso no console.
-   `Weather C` (600ms) eventualmente também responde, mas seu resultado não é mais necessário.

## 🚀 Como Executar

### Pré-requisitos

-   Node.js instalado (versão 18 ou superior).

### Passos

1.  Certifique-se de que os arquivos `index.js`, `solution.js` e `weatherServices.js` estão na mesma pasta.

2.  Abra o terminal na pasta do projeto.

3.  Execute o script com o seguinte comando (usando o script `dev` do `package.json`):

    ```bash
    npm run dev
    ```

4.  O resultado esperado no console será:

    ```
    Weather A respondeu: 28°C
    Temperatura atual: 28 C
    Weather C respondeu: 31°C
    ```
    *(As temperaturas são aleatórias e a ordem das respostas pode variar ligeiramente).*

## 💡 Conceitos-chave

-   **Promises**: Objetos que representam o resultado eventual de uma operação assíncrona.
-   **`Promise.any`**: Ideal para cenários de redundância, onde você só precisa de uma resposta bem-sucedida de várias fontes.
-   **Módulos ES (`import`/`export`)**: Usados para organizar o código em arquivos separados e reutilizáveis.
-   **Resiliência**: O sistema continua a funcionar mesmo com a falha de um ou mais de seus componentes.

## 💻 Código Fonte (`solution.js`)

```javascript
import {
  getFromWeatherA,
  getFromWeatherB,
  getFromWeatherC,
} from "./weatherServices.js";

export async function getFirstValidTemperature() {
  return Promise.any([getFromWeatherA(), getFromWeatherB(), getFromWeatherC()]);
}
```