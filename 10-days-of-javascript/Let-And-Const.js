function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  let r, area, perimeter;
  const PI = Math.PI;

  r = readLine();

  // Print the area of the circle:
  area = PI * r * r;
  console.log(area);

  // Print the perimeter of the circle:
  perimeter = 2 * PI * r;
  console.log(perimeter);
}
