import { Table } from './types';

const columns: Table = {
  columns: [
    { title: 'ФИО', field: 'fio' },
    { title: 'День рождения', field: 'birthYear', type: 'date' },
    { title: 'Должность', field: 'position' },
    { title: 'Роль', field: 'role' },
    { title: 'Пол', field: 'gender' },
  ],
  data: [
    { fio: 'Леонтьев Данила Вадимович', birthYear: new Date(), position: 'slkdfjlksdfj', role: 'sdjkflksdjfl', gender: 'M' },
    { fio: 'Леонтьев Данила Вадимович', birthYear: new Date(), position: 'slkdfjlksdfj', role: 'sdjkflksdjfl', gender: 'M' },
    { fio: 'Леонтьев Данила Вадимович', birthYear: new Date(), position: 'slkdfjlksdfj', role: 'sdjkflksdjfl', gender: 'M' },
    { fio: 'Леонтьев Данила Вадимович', birthYear: new Date(), position: 'slkdfjlksdfj', role: 'sdjkflksdjfl', gender: 'M' },
    { fio: 'Леонтьев Данила Вадимович', birthYear: new Date(), position: 'slkdfjlksdfj', role: 'sdjkflksdjfl', gender: 'M' },
    { fio: 'Леонтьев Данила Вадимович', birthYear: new Date(), position: 'slkdfjlksdfj', role: 'sdjkflksdjfl', gender: 'M' },
    {
      fio: 'Гиззатуллина Регина Ильфатовна',
      birthYear: new Date('06.27.1958'),
      position: 'skdfjlskdf',
      role: 'sdklfjsldkfjsldkfjalskf',
      gender: 'Ж',
    },
  ],
};

export default columns;
