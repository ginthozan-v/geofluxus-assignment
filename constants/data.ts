'use client';
import {
  ReadOutlined,
  CrownOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';

export const report = [
  {
    id: '1',
    Icon: ReadOutlined,
    title: 'Afval rapport',
    description:
      'Een overzicht van alle euralcodes, hoeveelheden, verwerkingsmethoden en verwerkers per business unit.',
    content: [
      { title: 'Verwerkingsmethodes', anchor: 'verwerkingsmethodes' },
      { title: 'Afvalstromen', anchor: 'afvalstromen' },
      { title: 'Verwerkers', anchor: 'verwerkers' },
      { title: 'Materialen', anchor: 'materialen' },
    ],
  },
  {
    id: '2',
    Icon: CrownOutlined,
    title: 'Benchmark rapport',
    description:
      'Vergelijk uw prestaties met die van branchegenoten om inzicht te krijgen in hoe u zich verhoudt tot de industrienormen.',
    content: [
      { title: 'Verwerkingsmethodes', anchor: 'verwerkingsmethodes' },
      { title: 'Afvalstromen', anchor: 'afvalstromen' },
      { title: 'Verwerkers', anchor: 'verwerkers' },
      { title: 'Materialen', anchor: 'materialen' },
    ],
  },
  {
    id: '3',
    Icon: FileDoneOutlined,
    title: 'CSRD rapport',
    description:
      'Een overzicht van alle benodigde  kwantitatieve data voor E5-5 van het CSRD rapport.',
    content: [
      { title: 'Verwerkingsmethodes', anchor: 'verwerkingsmethodes' },
      { title: 'Afvalstromen', anchor: 'afvalstromen' },
      { title: 'Verwerkers', anchor: 'verwerkers' },
      { title: 'Materialen', anchor: 'materialen' },
    ],
  },
];
