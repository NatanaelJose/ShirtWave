const { v4: uuidv4 } = require('uuid');

module.exports = {
  shirts: [
    {
      id: uuidv4(), 
      name: 'Camisa Azul com bolinhas',
      price: 25.99,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['blue'],
      image_url: 'https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa1.jpg?alt=media&token=29fc5bd2-95ab-4ea7-8212-7d860b80f22a',
    },
    {
      id: uuidv4(), 
      name: 'Camisa Azul',
      price: 29.99,
      sizes: ['S', 'L', 'XL'],
      colors: ['blue'],
      image_url: 'https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa2.jpg?alt=media&token=cb260b70-4503-4acb-b76e-76b2c5b7e0b1',
    },
    {
      id: uuidv4(), 
      name: 'Camisa Branca',
      price: 22.99,
      sizes: ['S', 'M', 'L'],
      colors: ['White'],
      image_url: 'https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa3.jpg?alt=media&token=a28da649-b170-4741-b80e-54519941e9f0',
    },
    {
      id: uuidv4(), 
      name: 'Camisa Preta',
      price: 27.99,
      sizes: ['S', 'M', 'L'],
      colors: ['black'],
      image_url: 'https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa4.jpg?alt=media&token=341265bc-6a69-499c-95f5-68c068372ada',
    },
    {
      id: uuidv4(), 
      name: 'Camisa Verde',
      price: 24.99,
      sizes: ['S', 'M', 'L'],
      colors: ['green'],
      image_url: 'https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa5.jpg?alt=media&token=7d89c63e-6483-47ba-8c8c-0332f8be38e8',
    },
    {
      id: uuidv4(), 
      name: 'Camisa Vermelha',
      price: 23.99,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['red'],
      image_url: 'https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa6.jpg?alt=media&token=c125f154-f1cd-473c-bffb-4f9f1993a427',
    },
  ],
};
