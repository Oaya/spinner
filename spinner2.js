const char = [
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
  "\n",
];
let time = 100;

for (const val of char) {
  setTimeout(() => {
    process.stdout.write(val);
  }, time);
  time += 200;
}
