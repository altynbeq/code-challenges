//https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/c

// built-in methods are not used cuz it is too easy
char *makeUpperCase (char *string)
{
  // write to string and return it
  int i = 0;
  while(string[i] != '\0'){
    if(string[i] >= 'a' && string[i] <= 'z'){
      string[i] -= 32;
    }
    i++;
  }
  return string;
}
