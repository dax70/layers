
let current = 0;

export default function generator() {
  return () => current ++;
}
