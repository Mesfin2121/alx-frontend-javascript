export default function guardrail(mathFunction) {
  const array = [];

  try {
    const response = mathFunction();
    array.push(response);
  } catch (error) {
    array.push(error.toString());
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}
