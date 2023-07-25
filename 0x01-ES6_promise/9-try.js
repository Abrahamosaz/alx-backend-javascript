export default function guardrail(mathFunction) {
  const queue = [];
  try {
    mathFunction();
  } catch (err) {
    queue.push(err.message);
  } finally {
    queue.push("Guardrail was processed");
  }
  return queue;
}
