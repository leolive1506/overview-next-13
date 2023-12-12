# rotas
- toda pasta vira uma rota
  - para ocutar basta colocar nome entre parentese (nome-pasta)
- é possível criar layout para cada página

# loading
- ao criar arquivo loading.tsx
- mostra isso no lugar do conteúdo quando algo estiver sendo processado
- estudar Skeleton screens (como se tivesse carregando página)

# Template vs Layout
- template recarrega a cada troca de página enquanto layout é estático

# Requisição
- agora é feito pelo proprio componente, transformando ele em async 
- por padrão, todos componentes serão servier-side first
- as requisição são geradas estáticas pelo lado do servidor
  - revalidate
    - para pagina toda criar
      ```tsx
      import Link from "next/link";
      // tempo revalidar em segundos
      export const revalidate = 30

      export default async function Home() {
        const response = await fetch('http://api.github.com/users/leolive1506')
        const user = await response.json()
      }
      ```
    - por requisição
      ```tsx
      const response = await fetch('http://api.github.com/users/leolive1506', {
        next: {
          revalidate: 30
        }
      })
      ```
    - requisições dinamicas
      ```tsx
      const response = await fetch('http://api.github.com/users/leolive1506', {
        // padrão que força que a resposta sempre seja cacheada
        cache: 'force-cache'
        // não armazena em cache de uma maneira global para todos usuários (SSR)
        cache: 'no-store'
      })
      ```

# Request waterfall (Cascata de requisições)
- componente que faz chamada http e dentro tem outro componente que também faz outra chamada http

## Como evitar 
- executa todas ao mesmo tempo a menos que uma dependa da responsta de outra (identifica automáticamente)
- quando um não depender do outro, pode executar as duas ao mesmo tempo com
```ts
const [res1, res2] = await Promise.all(
  fetch(''),
  fetch(''),
)
```

# Deduplicação automática
- evitar duplicação de req http

# Roteamento next
- useRouter agr vem de 'next/navigation' (antes 'next/router')

# Prefetch de páginas
- faz automaticamente
- por padrão os links que aparecem na tela são pré-carregados
- pode forçar carregamento usando useRouter()

# Cliente side components
- qualquer hook que armazene estado ou precise de informações, apis do navegador (useState, useEffect, window) é preciso especificar como componente como 'use client'
- quando componente é 'use client' ele não pode async
  - as requisições devem ser feitos da forma clássica
