const availabilityOptions = [{
  value: 'all',
  label: 'Todos',
},
{
  value: 'available',
  label: 'Disponible',
}, {
  value: 'sold',
  label: 'No disponible',
}];

const categoriesOptions = [
  'Baño',
  'Cocina',
  'Decoración',
  'Deporte',
  'Electrónico',
  'Habitación',
  'Jardinería',
  'Libros',
  'Mascotas',
  'Mueble',
  'Música',
  'Oficina',
  'Tecnología',
  'Hobbies',
  'Organización',
];

const orderOptions = [{
  value: 'alphabetical-az',
  label: 'Alfabético (A-Z)',
},
{
  value: 'alphabetical-za',
  label: 'Alfabético (Z-A)',
}, {
  value: 'price-low-high',
  label: 'Precio (menor a mayor)',
}, {
  value: 'price-high-low',
  label: 'Precio (mayor a menor)',
}];

module.exports = {
  availabilityOptions,
  categoriesOptions,
  orderOptions,
};
