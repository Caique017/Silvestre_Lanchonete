interface menuProps {
  nome: string,
  nameSection: string | null,
  id: number,
  valor: string
}

function generateRandomPrice() {
  return (Math.random() * (50 - 10) + 10).toFixed(2); // Gera um valor aleatório entre 10.00 e 50.00
}

 export const dishes: menuProps[] = [
  { nome: 'Virado à Paulista - Segunda-feira', nameSection: 'Pratos do dia', id: 1, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Bife à rolê - Terça-feira', nameSection: null, id: 2, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Feijoada - Quarta-feira', nameSection: null, id: 3, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Macarrão com frango - Quinta-feira', nameSection: null, id: 4, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Filé de peixe - Sexta-feira', nameSection: null, id: 5, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Feijoada - Sábado', nameSection: null, id: 6, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Omelete', nameSection: 'Pratos executivos', id: 7, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Picadinho', nameSection: null, id: 8, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Fígado Acebolado', nameSection: null, id: 9, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Frango ao Molho', nameSection: null, id: 10, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Costela ao Molho', nameSection: null, id: 11, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Calabresa', nameSection: null, id: 12, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Bife Acebolado', nameSection: null, id: 13, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Bife à Milanesa', nameSection: null, id: 14, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Bife à Cavalo', nameSection: null, id: 15, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Frango à Passarinho', nameSection: null, id: 16, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Picanha', nameSection: 'Pratos especiais', id: 17, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Filé Mignon', nameSection: null, id: 18, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Contra Filé', nameSection: null, id: 19, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Parmegiana', nameSection: null, id: 20, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Strogonoff', nameSection: null, id: 21, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Filé de Frango Grelhado', nameSection: null, id: 22, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Filé de Frango à Milanesa', nameSection: null, id: 23, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Carne Assada c/ Molho Madero', nameSection: null, id: 24, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'X-Salada', nameSection: 'Hambúrgueres & Beirutes', id: 25, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'X-Tudo', nameSection: null, id: 26, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'X-Bacon', nameSection: null, id: 27, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'X-Filé de Frango', nameSection: null, id: 28, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'X-Churrasco', nameSection: null, id: 29, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Americano', nameSection: null, id: 30, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Misto-Quente', nameSection: null, id: 31, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Queijo Quente', nameSection: null, id: 32, valor: `A partir de: R$ ${generateRandomPrice()}` },
  { nome: 'Beirute', nameSection: null, id: 33, valor: `A partir de: R$ ${generateRandomPrice()}` },
]