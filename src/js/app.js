export default function destructuring(obj) {
  const newObj = [];
  const { special } = obj;

  special.forEach((elem) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = elem;
    newObj.push({
      id,
      name,
      description,
      icon,
    });
  });
  return newObj;
}
